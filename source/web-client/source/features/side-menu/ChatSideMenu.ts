import { BaseSideMenuElement, MenuCategory, MenuItem, DragEffect } from "./BaseSideMenuElement";
import { cityline } from "features/cityline";
import { Channel } from 'features/channel-editor/ChannelStore';

class ChatSideMenuElement extends BaseSideMenuElement {

    async connectedCallback() {
        await super.connectedCallback();
        cityline.addEventListener("channels", this.refresh);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        cityline.removeEventListener("channels", this.refresh);
    }

    protected async getMenuCategories(selectedEvaluator: (item: MenuItem) => void) : Promise<MenuCategory[]> {
        const channels = await cityline.getFrame<Channel[]>("channels");

        return [ {
            title: "Channels",
            items: channels.map(channel => ({
                title: channel.name,
                path: `/channel/${channel.id}`
            }))
        }];
    }
}


customElements.define("chat-side-menu", ChatSideMenuElement);