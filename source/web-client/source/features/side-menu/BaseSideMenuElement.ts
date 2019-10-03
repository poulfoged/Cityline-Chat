import { DOM } from "lib/DOM";
import { Formatting } from "lib/Formatting";
import "./BaseSideMenuElement-style";
import { RoutingStore, IRoute } from "features/routing/RoutingStore";
import { TopMenuStore } from 'features/top-menu/TopMenuStore';

export interface MenuCategory {
    title?: string;
    items?: MenuItem[];
    devider?: boolean;
}

export interface MenuItem {
    id?: string;
    title: string;
    icon?: string;
    svgIcon?: string;
    imgIcon?: string;
    items?: MenuItem[];
    count?: number;
    draggable?: boolean;
    dropTarget?: boolean;
    path?: string; 
    expandable?: boolean;
    open?: boolean;
    selected?: boolean;
}

export type DragEffect = "copy" | "move" | "none";

export abstract class BaseSideMenuElement extends HTMLElement {
    protected abstract getMenuCategories(selectedEvaluator: (item: MenuItem) => void) : Promise<MenuCategory[]>;
    private _phoneMediaMatch = window.matchMedia("screen and (max-width: 850px)");
    private static _onetimeInit = false;
    private escape = Formatting.htmlEscape;
    

    protected dragHover(itemId: string, data: string, ctrlKey: boolean) : DragEffect {
        console.log("dragHover", itemId, data);
        return "none";
    }

    protected async drop(itemId: string, data: string, ctrlKey: boolean) : Promise<void> {
        console.log("drop", itemId, data);
    }

    private ensureOverlay() {
        let overlay = document.body.querySelector("[name=body-overlay]");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.setAttribute("name", "body-overlay");
            document.body.insertAdjacentElement("afterbegin", overlay);

            overlay.addEventListener("click", this.hideHandler);
        }
    }

    private hideHandler = () => document.body.removeAttribute("show-side-menu");
    
    private ensureOneTimeInit() {
        if (BaseSideMenuElement._onetimeInit)
            return;

        BaseSideMenuElement._onetimeInit = true;

        this.ensureOverlay();
        
        TopMenuStore.instance.append("side-menu", {
            name: "side-menu",
            icon:  require("!!raw-loader!image/menu-20-v1.svg"),
            title: "Side menu",
            side: "left",
            priority: 0,
            handler: () => DOM.toggleAttribute(document.body, "show-side-menu")
        });

        this._phoneMediaMatch.addListener(this.phoneMediaHandler);
    }

    async connectedCallback() {
        this.classList.add("side-menu");
        this.ensureOneTimeInit();
        this.phoneMediaHandler(this._phoneMediaMatch);
   
        RoutingStore.instance.onChange(this.routeChangeHandler);
        this.addEventListener("click", this.clickHandler);

        // if (this.classList.contains("side-menu"))
        //     return;
        
        
        await this.refresh();
    }

    disconnectedCallback() {
        RoutingStore.instance.offChange(this.routeChangeHandler);
        this.removeEventListener("click", this.clickHandler);
    }

    private phoneMediaHandler = (listener: any) : any => {
        if (listener.matches)
            document.body.removeAttribute("show-side-menu");
        else
            document.body.setAttribute("show-side-menu", "");
    }

    protected getElement = (itemId: string): HTMLElement => this.querySelector(`.item[id="item-${itemId}"]`);

    protected removeItem(itemId: string) {
        const item = this.getElement(itemId);
        if (item)
            item.remove();
    }

    protected refresh = async () => {
        const selectedEvaluator = (item: MenuItem) => item.selected = RoutingStore.instance.matches(item.path);
        this.innerHTML = this.view(await this.getMenuCategories(selectedEvaluator));

        const draggables = [].slice.call(this.querySelectorAll("[draggable]"));

        draggables.forEach( (draggable: HTMLElement) => {
            draggable.addEventListener("dragstart", event => {
                event.dataTransfer.effectAllowed = "Move";
                const itemId = draggable.id.substring(5);
                event.dataTransfer.setData("text", `${itemId}`);
            });
        });

        const dropTargets = [].slice.call(this.querySelectorAll("[drop-target]"));

        

        dropTargets.forEach( (dropTarget: HTMLElement) => {
            let counter = 0;

            dropTarget.addEventListener("dragenter", event => {
                event.preventDefault();
                counter++;
                
                const item = (event.target as HTMLElement).closest(".item");
                const itemId = item.id.substring(5);
                event.dataTransfer.dropEffect = this.dragHover(itemId, event.dataTransfer.getData("text"), event.ctrlKey);
                dropTarget.setAttribute("over", "");
            });

            dropTarget.addEventListener("dragleave", event => {
                event.preventDefault();
                counter--;
                
                if (counter <= 0) {
                    counter = 0;
                    dropTarget.removeAttribute("over");
                }
            });

            dropTarget.addEventListener("dragover", async (event: DragEvent) => {
                event.preventDefault();
                const item = (event.target as HTMLElement).closest(".item");
                const itemId = item.id.substring(5);
                event.dataTransfer.dropEffect = this.dragHover(itemId, event.dataTransfer.getData("text"), event.ctrlKey);
            });

            dropTarget.addEventListener("drop", async event => {
                event.preventDefault();
                counter = 0;
                dropTarget.removeAttribute("over");
                const item = (event.target as HTMLElement).closest(".item");
                const itemId = item.id.substring(5);
                await this.drop(itemId, event.dataTransfer.getData("text"), event.ctrlKey);
            });
        });
    }

    protected async itemClick(id: string) {
        
    }

    protected async rootClick(id: string) {
        
    }

    private clickHandler = async (event: UIEvent) =>  {
        const item = (event.target as HTMLElement).closest(".item") as HTMLElement

        const expandable = (event.target as HTMLElement).closest("[expandable]") as HTMLElement;
        if (expandable) {
            if (item.hasAttribute("open")) {
                item.removeAttribute("open");
                item.removeAttribute("style");
            }
            else {
                this.openExpandable(expandable);
            }
        } else {
            if (!item)
                return;
                
            const itemId = item.id.substring(5);
            await this.itemClick(itemId);
            const parent = item.parentElement.closest(".item");
            if (parent) {
                const parentItemId = parent.id.substring(5);
                await this.rootClick(parentItemId);
            } else {
                await this.rootClick(itemId);
            }

            if (this._phoneMediaMatch.matches)
                this.hideHandler();
        }
    }

    
        protected selectItem(itemId: string) {
        const element = this.getElement(itemId);
        if (!element)
            return;
        
        this.selectElement(element);
    }

    protected selectedElementId() {
        const active = this.querySelector(".item[active]");
        return active && active.id;
    }

    protected selectElementId(id: string) {
        const node = this.querySelector(`[id="${id}"]`) as HTMLElement;
        if (node) 
            this.selectElement(node);
    }

    protected selectElement(item: HTMLElement) {
        if (!item.hasAttribute("active"))
        {            
            const previousActive = this.querySelector(".item[active]");
            if (previousActive && previousActive !== item)
                previousActive.removeAttribute("active");

            item.setAttribute("active", "");
        }

        // check if parent is open
        const parent = item.parentElement.closest(".item") as HTMLElement;
        if (parent && this.contains(parent)) // limit to our element scope
            this.openItem(parent);
    }

    protected updateItem(item: MenuItem) {
        const node = this.querySelector(`[id="item-${item.id}"]`);
        if (node) { 
            const oldDetailsElement = node.querySelector(".details") as HTMLElement;
            node.replaceChild(DOM.parse(this.detailsView(item, false, false)), oldDetailsElement);
        }
    }

    private openExpandable(expandable: HTMLElement) {
        const item = expandable.closest(".item") as HTMLElement;
        if (item)
            this.openItem(item);
    }

    private openItem(itemElement: HTMLElement) {
        // lazy load child images
        const lazyImages = [].slice.call(itemElement.querySelectorAll("img[data-src]:not([src])")); 
        lazyImages.forEach( (imageElement: HTMLImageElement) => {
            imageElement.src = imageElement.getAttribute("data-src");
        });


        const otherOpen = this.querySelector(".item[open]") as HTMLElement;
        if (otherOpen && otherOpen !== itemElement) {
            otherOpen.removeAttribute("open");
            otherOpen.removeAttribute("style");
        }
        
        itemElement.setAttribute("open", "");
        itemElement.style.maxHeight = itemElement.getAttribute("open-height");
    }

    private routeChangeHandler =  (event: CustomEvent<IRoute>) => {
        const route = event.detail;
        const routeItem = this.querySelector(`[href="/${route.path.join("/")}"]`);

        if (!routeItem)
            return;

        const item = routeItem.closest(".item") as HTMLElement;
        if (!item)
            return;

        this.selectElement(item);
        
    };

    private formatCount = (count: number) => count > 99 ? "99+" : count.toString(); 
    
    private itemView = (item: MenuItem, isChild = false, allowLazy = true) => {
        
        const routing = this.escape`href="${item.path}" route`;
        return this.escape`
        <div id="item-${item.id}" 
             class=item $${item.items ? `open-height="${(1+item.items.length)*34}px"` : ""} 
             $${item.expandable && item.selected ? `style="max-height: ${(1+item.items.length)*34}px"` : ""}
             ${item.draggable ? "draggable=true" : ""} 
             ${item.dropTarget ? "drop-target" : ""} 
             ${item.selected ? (item.expandable ? "open" : "active") : ""}
             $${item.expandable ? "" : routing}>
             $${this.detailsView(item, isChild, (!item.selected && allowLazy))}
             $${item.items ? item.items.map(c => this.itemView(c, true, !item.selected)).join("") : ""}
        </div>
    `};

    private detailsView = (item: MenuItem, isChild: boolean, allowLazy: boolean) => this.escape`
        <div class=details>
            <div class=icon title="${item.title}" ${item.expandable ? "expandable" : ""}>
                $${item.svgIcon ? item.svgIcon : ""}
                $${item.imgIcon ? `<img ${isChild && allowLazy ? "data-" : ""}src="${item.imgIcon}" />` : ""}
            </div>
            <div class=title title="${item.title}" $${item.expandable ? `href="${item.path}" route` : ""}>
                ${item.title}
            </div>
            <div class=count ${item.count && item.count > 0 ? this.escape`title="${item.count} items"` : ""} $${item.expandable ? `href="${item.path}" route` : ""}>
                $${item.count && item.count > 0 ? this.formatCount(item.count) : ""}
            </div>
        </div>
    `;

    private categoryView = (category: MenuCategory) => this.escape`
        <div>
            $${category.title ? this.escape`<div class=category>${category.title}</div>` : ""}
            $${category.items.map(c => this.itemView(c)).join("")}
        </div>
    `;

    private view = (categories: MenuCategory[]) => this.escape`
        $${categories.map(c => this.categoryView(c)).join("")}
    `; 
}
