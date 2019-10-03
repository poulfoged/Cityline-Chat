import { DOM } from "lib/DOM";
import { RoutingStore} from "./RoutingStore";

class RoutingActivator {
    private static _instance = new RoutingActivator();

    private constructor() {
        setTimeout(async () => {
            document.addEventListener("click", this.clickHandler);
        });
    }

    private clickHandler = (event: UIEvent) => {
        try {
    
            const target = <HTMLElement>(event.target || event.currentTarget);

            if (!target)
                return;

            const route = target.closest("[route]");

            if (route) {

                let link: HTMLAnchorElement;
                if (route.hasAttribute("href"))
                    link = route as HTMLAnchorElement;
                else
                    link = route.querySelector("a[href]") as HTMLAnchorElement;

                const url = link.getAttribute("href");
                RoutingStore.instance.publish(url);
                event.preventDefault();
            }
        }
        catch(e) {
            console.log(e);
        }
    };
}