import "./AppSwitchElement-style";
import { IRoute, RoutingStore } from "features/routing/RoutingStore";

export interface App {
    name: string;
    title: string;
    template: HTMLTemplateElement,
    element: HTMLElement;
    isDefault: boolean;
    pathPatterns: string[];
    defaultPath: string;
    namedIcon: string;
    hotkey?: any;
}

class AppSwitchElement extends HTMLElement {
    public static ClassName = "AppSwitchElement";
    private items: App[] = [];
    private contentArea: HTMLElement;
    private sideButtons: HTMLElement;
    private bottomButtons: HTMLElement;
    private currentApp: App;

    async connectedCallback() {
        
        this.items = [].slice.call(this.querySelectorAll("template")).map( (template: HTMLTemplateElement) => <App>({
            name: template.getAttribute("name"),
            title: template.getAttribute("title"),
            template: template,
            isDefault: template.hasAttribute("default"),
            pathPatterns: template.getAttribute("path-patterns").split(","),
            defaultPath: template.getAttribute("default-path"),
            namedIcon: template.getAttribute("named-icon"),
            hotkey: template.hasAttribute("hot-key") ? JSON.parse(template.getAttribute("hot-key")) : undefined
        }));


        const defaultItem = this.items.filter(i => i.isDefault)[0];

        this.insertAdjacentElement("afterbegin", this.sideButtons = this.createAppBar("app-buttons-side"));

        this.contentArea = document.querySelector("app-content") as HTMLElement;

        if (!this.contentArea) {
            this.contentArea = document.createElement("app-content");
            this.insertAdjacentElement("beforeend", this.contentArea);
        } else {
            defaultItem.element = this.contentArea.firstElementChild as HTMLElement;
        }

        this.insertAdjacentElement("beforeend", this.bottomButtons = this.createAppBar("app-buttons-bottom")); 

        const match = this.appByRoute(RoutingStore.instance.current);
     
        // so we server-render defaultItem, hence less work    
        if (match && match !== defaultItem) { 
            this.showApp(match);
        } else {
            this.showSelected(match);
            this.currentApp = match;
        }

        this.setAttribute("rendered", "");

        RoutingStore.instance.onChange(this.routeChangeHandler)

    }

    private routeChangeHandler = (event: CustomEvent<IRoute>) => {
        const item = this.appByRoute(event.detail);
        if (item)
            this.showApp(item);
    };

    private appByRoute(route: IRoute) : App {
        return this.items.filter(m => m.pathPatterns.filter(f => RoutingStore.isMatch(route, f)).length > 0)[0];
    }

    private showApp(item: App, updateRoute = false) {

        // IE must clone every time!
        if (!item.template.content) {
            item.element = <any>item.template.firstElementChild.cloneNode(true) as HTMLElement; // IE 11
        } else {
            if (!item.element) 
                item.element = <any>item.template.content.firstElementChild as HTMLElement;
        }

        if (item === this.currentApp)
            return;

        this.currentApp = item;
        // this.contentArea.innerHTML = "";
        // this.contentArea.appendChild(item.element);
        this.showSelected(item);

        if (updateRoute) {
            RoutingStore.instance.publish(item.defaultPath);
        }

    }

    private showSelected(item: App) {
        if (!item) {
            document.body.removeAttribute("show-side-menu");
            return;
        }
        this.sideButtons.setAttribute("selected", item.name);
        this.bottomButtons.setAttribute("selected", item.name);

        setTimeout(() => {
            window.dispatchEvent(new CustomEvent("loaded"));
        }, 0);
    }

    private changeAppHandler = (event: CustomEvent) => {
        const item = this.items.filter(i => i.name === event.detail)[0];
        if (!item)
            return; 

        RoutingStore.instance.publish(item.defaultPath);
    };

    private createAppBar(tagName: string) {
        const element = document.createElement(tagName);
        element.addEventListener("change-app", this.changeAppHandler);
        const itemsScript = document.createElement("script");
        itemsScript.setAttribute("type", "application/json+tab-items")
        itemsScript.innerHTML = JSON.stringify(this.items);
        element.appendChild(itemsScript);
        return element;
    }
}


customElements.define("app-switch", AppSwitchElement);
