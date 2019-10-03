import * as appStyle from "./AppLoaderElement-module.less";
import { cityline } from "features/cityline"

class AppLoaderElement extends HTMLElement {
    private loadingScreen: HTMLElement;
    private named = <T extends HTMLElement> (name: string): T => this.querySelector(`[name=${name}]`) as T;
    
    async connectedCallback() {
        this.className += ` ${appStyle.appLoader}`;

        this.insertAdjacentHTML("afterbegin", this.view());

        this.loadingScreen = this.named("loading-screen");

        const init = await cityline.getFrames("user-account");
        // console.log("initalized with", init);

        const template = this.querySelector(
            "template"
        ) as HTMLTemplateElement;

        let element;
        if (!template.content) {
            element = (<any>(
                template.firstElementChild.cloneNode(true)
            )) as HTMLElement; // IE 11
        } else {
            element = (<any>(
                template.content.firstElementChild
            )) as HTMLElement;
        }

        this.insertAdjacentElement("beforeend", element);

        setTimeout(() => {
            this.loadingScreen.style.opacity = "0";
            this.loadingScreen.style.pointerEvents = "none";
        }, 1200);

    }

    private view = () => `
        <div name=loading-screen class="${appStyle.loadingScreen}">chat</div>
    `;
}

customElements.define("app-loader", AppLoaderElement);