import * as topMenuStyle from "./TopMenu-module.less";
import { TopMenuStore, TopMenuItem } from "./TopMenuStore";

class TopMenuElement extends HTMLElement {
    private named = <T extends HTMLElement> (name: string): T => this.querySelector(`[name=${name}]`) as T;
    private leftPart: HTMLElement;
    private centerPart: HTMLElement;
    private rightPart: HTMLElement;

    connectedCallback() {
        this.className += ` ${topMenuStyle.topMenu}`;

        // inform other components of our height
        document.documentElement.style.setProperty("--top-menu-height", `${this.offsetHeight}px`);
        
        this.innerHTML = this.view();
        this.leftPart = this.named("left");
        this.centerPart = this.named("center");
        this.rightPart = this.named("right");
        TopMenuStore.instance.onChange(this.refreshHandler);
        TopMenuStore.instance.onTitleChange(this.titleChangeHandler);
        this.addEventListener("click", this.clickHandler);
    }

    private titleChangeHandler = (event: CustomEvent<string>) => {
        this.centerPart.innerText = event.detail;
    };

    private refreshHandler = () => {
        const left = TopMenuStore.instance.all().filter(m => m.side === "left");
        this.leftPart.innerHTML = left.map(m => this.buttonView(m)).join(""); 

        const right = TopMenuStore.instance.all().filter(m => m.side === "right");
        this.rightPart.innerHTML = right.map(m => this.buttonView(m)).join(""); 
    }

    private clickHandler = (event: UIEvent) => {
        const button = (event.target as HTMLElement).closest("button");
        if (button)
            TopMenuStore.instance.trigger(button.name);
    };

    buttonView = (item: TopMenuItem) => `
        <button type=button name="${item.name}" title="${item.title}">${item.icon}</button>
    `

    view = () => `
        <div name=left></div>
        <div name=center>Chat</div>
        <div name=right></div>
    `;
}

customElements.define("top-menu", TopMenuElement);