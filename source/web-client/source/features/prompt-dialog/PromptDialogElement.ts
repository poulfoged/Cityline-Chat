import * as dialogStyle from "../../styles/dialog-module.less";
import * as formsStyle from "../../styles/forms-module.less";
import { PromptOption } from ".";

class PromptDialogElement extends HTMLElement {
    private options: PromptOption[];

    connectedCallback() {
        this.className += dialogStyle.frame;
        this.options = JSON.parse(this.querySelector("script").innerText);
        this.innerHTML = this.view();
        this.addEventListener("click", this.clickHandler);
    }

    private clickHandler = (event: Event) => {
        if (!(event.target instanceof HTMLElement))
            return;

        const target = event.target as HTMLElement;

        const button = target.closest("button");
        if (!button)
            return;

        const optionId = button.getAttribute("option-id");
        if (!optionId)
            return;

        event.preventDefault();
        event.stopPropagation();

        this.dispatchEvent(new CustomEvent("decided", { bubbles: true, detail: optionId }));
        this.remove();

    }

    private view = () => `
        <div class="${dialogStyle.window}">
            <div class="${dialogStyle.text}">${this.getAttribute("text")}</div>
            <div class="${dialogStyle.buttons}">
                ${this.options.map(option => `<button option-id="${option.id}" class="${option.intent === "primary" ? formsStyle.primary : formsStyle.secondary}">${option.title}</button>`).join("")}
            </div>
        </div>
    
    `;

    // ${this.secondaryButtons().map(title => `<button class="${formsStyle.secondary}">${title}</button>`).join("")}
    //             ${this.primaryButtons().map(title => `<button class="${formsStyle.primary}">${title}</button>`).join("")}
}

customElements.define("prompt-dialog", PromptDialogElement);