import EventTarget from "@ungap/event-target";

/*
    Handles routing, click on links etc.
*/
export class RoutingStore {
    private static _instance = new RoutingStore();
    private constructor() {}
    static get instance() { return RoutingStore._instance; }
    private history: IRoute[] = [];
    private isFileProtocol = true; //window.location && window.location.protocol === "file:" || window.location.hostname === "localhost";
    private currentRoute: IRoute;
    private eventTarget = new EventTarget();


    private emitChange(route: IRoute, requester = "unknown") {
        this.eventTarget.dispatchEvent(new CustomEvent<IRoute>("route-change", { detail: route }));
    }
   
    onChange(callback: (event: CustomEvent<IRoute>) => void) {
        this.eventTarget.addEventListener("route-change", callback);
    }

    offChange(callback: (event: CustomEvent<IRoute>) => void) {
        this.eventTarget.removeEventListener("route-change", callback);
    }

    get current() {
        return this.currentRoute || (this.currentRoute = RoutingStore.parse(location.href));
    } 

    set(url: string) {
        this.currentRoute = RoutingStore.parse(url);
        
        if (!this.isFileProtocol) 
            window.history.pushState(url, url, url);
        else
        {
            this.history.push(this.currentRoute);
            window.location.hash = "";
        }
    }

    publish(url: string) {
        
        this.currentRoute = RoutingStore.parse(url);
        
        if (!this.isFileProtocol) 
            window.history.pushState(url, url, url);
        else
        {
            this.history.push(this.currentRoute);
            window.location.hash = "";
        }

        this.emitChange(this.currentRoute);
        console.log("Route", this.currentRoute.path.join("/"));
    }

    public goBack() {
        if (this.history.length > 0) 
            this.history.pop(); // pop current

        if (this.history.length > 0) {
            const backUrl = this.history[this.history.length-1]; // previous
            
            this.currentRoute = backUrl;
            this.emitChange( this.currentRoute );
            return true;
        } else {
            return false;
        }
    }

    public static parse(url: string) : IRoute {
        const parsed = new URL(url, "https://not-used");
    
        if (!parsed)
            console.log("Could not parse", url);

        if (parsed.pathname[0] === "/")
            parsed.pathname = parsed.pathname.substring(1);

        const path = parsed.pathname.split("/").filter(i => i !== "");

        const parameters = {};
        parsed.search.substring(1).split("&").forEach(parameter => {
            if (!parameter)
                return;

            const parts = parameter.split("=");
            parameters[parts[0]] = parts.length > 1 ? decodeURIComponent(parts[1].replace(/\+/g, "%20")) : "";
        });

        const result = {
            path: path,
            parameters: parameters,
            hash: parsed.hash
        };


        return result;
    }

    public matches(url: string) {
        return RoutingStore.isMatch(this.currentRoute, url);
    }

    public static isMatch(route: IRoute, url: string) {
        const parsed = this.parse(url);

        let pos = 0;
        for (const part of parsed.path) {
            const routePart = route.path[pos];
            pos++;

            if (part === "@*" && routePart && routePart[0] === "@")
                continue;

            if (part === "-" && !routePart)
                continue;

            if (part === "*" && routePart)
                continue;
            
            if (!routePart || part !== routePart)
                return false;
        }

        return true;
    }
}

export interface IRoute {
    path: string[];
    parameters:{ [key: string]: string };
    origin?: RouteChangeOrigin;
    hash?: string;
    requester?: string;
}


export enum RouteChangeOrigin{
    Requested,
    PageLoad,
    Popstate,
    Pushstate
}

export interface HasRequester {
    requesterName: string;
}
