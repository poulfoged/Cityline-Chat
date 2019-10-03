import * as contentTargetStyle from "./ContentTarget-module.less";

class ContentTargetElement extends HTMLElement {
    connectedCallback() {
        this.className += ` ${contentTargetStyle.contentTarget}`;
    }
}

customElements.define("content-target", ContentTargetElement);