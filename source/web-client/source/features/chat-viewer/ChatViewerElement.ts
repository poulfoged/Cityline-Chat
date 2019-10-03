import * as chatStyle from "./ChatViewerElement-module.less";
import { ChatStore, Sentence } from "./ChatStore";
import { TopMenuStore } from "features/top-menu/TopMenuStore";
import { UserStore } from "features/user-account/UserStore";

export class ChatViewerElement extends HTMLElement {
    private messageView: HTMLElement;
    private channelId = () => this.getAttribute("channel-id");
    private isSelf: (userId: string) => boolean;

    async connectedCallback() {
        this.className += ` ${chatStyle.chatViewer}`;
        const user = await UserStore.instance.currentUser();


        this.isSelf = (userId: string) => userId === user.id;
        

        this.innerHTML = this.view();

        this.messageView = this.querySelector("[name=messages]");
       
        ChatStore.instance.addEventListener(`message-${this.channelId()}`, this.messageHandler);
        TopMenuStore.instance.setGroup("right", [{ title: "Create channel", name: "create-channel", side: "right", icon: require("!!raw-loader!image/create.svg"), handler: this.createChannelHandler }]);

        this.render(await ChatStore.instance.getMessages(this.channelId()));
    }

    disconnectedCallback() {
        ChatStore.instance.removeEventListener(`message-${this.channelId()}`, this.messageHandler);
    }

    private createChannelHandler = () => {
        this.replaceWith(document.createElement("channel-editor"));
    };
  
    private sentenceView = (sentence: Sentence) => `
        <div class="${chatStyle.sentence}" ${this.isSelf(sentence.userId) ? "self" : ""} user-id="${sentence.userId}">
            <local-date datetime="${sentence.created}" use-words></local-date>
            <div name=user-id>${sentence.username || sentence.userId}</div>
            <div name=text><div>${sentence.text}</div></div>
        </div>
    `;

    private view = () => `
        <div name=messages></div>
        <chat-box channel-id=${this.channelId()}></chat-box>
    `;

    private messageHandler = (event: CustomEvent<Sentence[]>) => {
        const sentences = event.detail;
        this.render(sentences);
    }

    private render(sentences: Sentence[]) {
        sentences.forEach(m => {
            if (m.channelId === this.channelId())
                this.messageView.insertAdjacentHTML("beforeend", this.sentenceView(m));
        });
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.messageView.scrollTo(0, this.messageView.scrollHeight);
            });
        });
        
    }
    
}

customElements.define("chat-viewer", ChatViewerElement);