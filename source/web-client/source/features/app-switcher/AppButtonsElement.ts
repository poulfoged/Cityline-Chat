
import { App } from "./AppSwitchElement";
// import { User, AuthenticationStore } from "features/authentication";
import "./AppButtonsElement-style";

class AppButtonsElement extends HTMLElement {
    private items: App[];
    // private user: User;

    static get observedAttributes() { return ["selected"]; }

    private _selected = () => this.getAttribute("selected");

    async attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === "selected") {
            this.showSelected(newVal);
        }    
    }

    private resolveIcon(name: string) : string {
        switch(name) {
            case "discover":
                return require("!!raw-loader!image/compass.svg");
            case "orders":
                return require("!!raw-loader!image/history.svg");
            case "vouchers":
                return require("!!raw-loader!image/vouchers.svg");
            case "me":
                return require("!!raw-loader!image/me.svg");
        }

        return "no icon";
    }

    private showSelected(name: string){
        const toBeSelected = this.querySelector(`[name=${name}]`);
        if (toBeSelected) {
            const toBeCleared = this.querySelector("[selected]");

            if (toBeCleared && toBeCleared !== toBeSelected)
                toBeCleared.removeAttribute("selected");

            toBeSelected.setAttribute("selected", "");
        }
    }

    async connectedCallback() {
        //this.user = await AuthenticationStore.instance.currentUser();
        const element = this.querySelector("[type='application/json+tab-items']");
        this.items = JSON.parse(element.innerHTML) as App[];
        this.innerHTML = this.view();
        this.addEventListener("click", event => {
            const button = (event.target as HTMLElement).closest("button");
            if (!button)
                return;

            // search hack
            if (button.name !== "search")
                this.showSelected(button.name);
            this.dispatchEvent(new CustomEvent("change-app", { detail: button.name }));
        });

        this.showSelected(this._selected());
    }

    private view = () => `
        ${this.items.map(item => `
            <button type=button name="${item.name}"${item.name === this._selected() ? " selected" : ""}>
                <div class=count></div>
                ${this.resolveIcon(item.namedIcon)}
                ${item.title}
            </button>`).join("")}

        
    `;

    // <div name=version title="Linkstacks build ${SettingsStore.instance.version.buildDate}">
    //         ${SettingsStore.instance.version.number()}
    //     </div>
}

class AppButtonsSide extends AppButtonsElement {}
class AppButtonsBottom extends AppButtonsElement {}

customElements.define("app-buttons-side", AppButtonsSide);
customElements.define("app-buttons-bottom", AppButtonsBottom);