import * as boxStyle from "./ChatBoxElement-module.less";
import { ChatStore, Sentence } from 'features/chat-viewer/ChatStore';

class ChatBoxElement extends HTMLElement {

    private inputBox: HTMLInputElement;
    private channelId = () => this.getAttribute("channel-id");

    connectedCallback() {
        this.className += ` ${boxStyle.chatBox}`;
        this.innerHTML = this.view();

        this.inputBox = this.querySelector("input");

        this.inputBox.addEventListener("keypress", this.keyHandler);

       
    }

    private keyHandler = async (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            const sentence: Sentence = {
                text: this.inputBox.value
            };
            this.inputBox.value = "";
            await ChatStore.instance.say(this.channelId(), sentence);
        }
    }

    private view = () => `
        <input type=text name=message placeholder="Type text here ..." />
    `;
}

customElements.define("chat-box", ChatBoxElement);