import { RoutingStore, IRoute } from "features/routing/RoutingStore";

export class ChatViewerActivator {
    private static _instance = new ChatViewerActivator();
    private constructor() {
        RoutingStore.instance.onChange(this.routeChangeHandler);
    }

    private routeChangeHandler = (event: CustomEvent<IRoute>) => {
        if (RoutingStore.isMatch(event.detail, "/channel/*")) {

            const target = document.querySelector("content-target");
            target.innerHTML = "";

            const chatViever = document.createElement("chat-viewer")
            chatViever.setAttribute("channel-id", event.detail.path[1]);
            target.append(chatViever);
        }

    };
}
