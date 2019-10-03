import { RoutingStore } from "features/routing/RoutingStore";
import EventTarget from "@ungap/event-target";

export class TopMenuStore {
    private static _instance = new TopMenuStore();
    static get instance() : TopMenuStore { return TopMenuStore._instance; }
    private _phoneMediaMatch = window.matchMedia("screen and (max-width: 850px)");
    private customMenuGroups: { [groupName: string] : TopMenuItem[]; } = {};
    private eventTarget = new EventTarget();
    private title: string;

    private constructor() 
    { 
        this._phoneMediaMatch.addListener(this.emitChange);
    }
    

    private emitChange() {
        this.eventTarget.dispatchEvent(new CustomEvent("change"));
    }
   
    onChange(callback: (event: CustomEvent) => void) {
        this.eventTarget.addEventListener("change", callback);
    }

    offChange(callback: (event: CustomEvent) => void) {
        this.eventTarget.removeEventListener("change", callback);
    }

    private emitTitleChange(title: string) {
        this.eventTarget.dispatchEvent(new CustomEvent<string>("title-change", { detail: title }));
    }
   
    onTitleChange(callback: (event: CustomEvent<string>) => void) {
        this.eventTarget.addEventListener("title-change", callback);
    }

    offTitleChange(callback: (event: CustomEvent<string>) => void) {
        this.eventTarget.removeEventListener("title-change", callback);
    }

    all() : TopMenuItem[] {
        let allItems = [];

        for(const key in this.customMenuGroups) {
            allItems = allItems.concat(this.customMenuGroups[key]);
        }

        allItems = allItems.filter(m => m.evaluator === undefined || m.evaluator());

        allItems.sort( (a:TopMenuItem, b:TopMenuItem) => {
            if (a.priority > b.priority)
                return 1;
            
            if (a.priority < b.priority)
                return -1;

            return 0;
                
        });

        return allItems;
    }

    setTitle(title: string) {
        this.title = title;
        this.emitTitleChange(title);
    }

    setGroup(name: string, items: TopMenuItem[]) {
        this.customMenuGroups[name] = items;
        this.emitChange();
    }

    append(name: string, item: TopMenuItem) {
        this.customMenuGroups[name] = this.customMenuGroups[name] || [];
        this.customMenuGroups[name].push(item);
        this.emitChange();
    }

    trigger(name: string) {
        const item = this.all().filter(m => m.name === name)[0];
        if (item && item.handler)
            item.handler();
    }

    static get foundation() {
        return {
            "back-button": { name: "back", side: "left", icon: require("!!raw-loader!image/back-arrow.svg"), title: "Back", handler: () => RoutingStore.instance.goBack() } as TopMenuItem
        }
    }
}

export interface TopMenuItem {
    title: string;
    name: string;
    icon?: any;
    side: "left" | "right" | "context"
    priority?: number,
    handler?: () => void,
    evaluator?: () => boolean 
}