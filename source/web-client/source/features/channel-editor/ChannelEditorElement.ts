import { ChannelStore } from "./ChannelStore";
import { RoutingStore } from 'features/routing/RoutingStore';

class ChannelEditorElement extends HTMLElement {
    private button: HTMLButtonElement;

    connectedCallback() {
        this.innerHTML = this.view();
        this.button = this.querySelector("button");
        this.button.addEventListener("click", this.clickHandler);
    }

    disconnectedCallback() {
        this.button.removeEventListener("click", this.clickHandler);
    }

    private clickHandler = async () => {
        const channel = {
            name: (this.querySelector("[name=name]") as HTMLInputElement).value,
            isPublic: (this.querySelector("[name=name]") as HTMLInputElement).checked,
            allowedUsers: (this.querySelector("[name=allowed-users]") as HTMLInputElement).value.split("\n"),
        }

        const newChannel = await ChannelStore.instance.create(channel);
        RoutingStore.instance.publish(`/channel/${newChannel.id}`);
    };

    private view = () => `
        <label>
            Name
            <input type=text name=name>
        </label>

        <label>
            Public
            <input type=checkbox name=isPublic>
        </label>
        <label>
            Allowed member-ids (one per line)
            <textarea name=allowed-users></textarea>
        </label>

        <button>Go</button>
    `;
}

customElements.define("channel-editor", ChannelEditorElement);