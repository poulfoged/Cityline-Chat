import * as userStyle from "./UserAccountElement-module.less";
import * as formsStyle from "../../styles/forms-module.less";
import { UserStore, UserAccount } from "./UserStore";

class UserAccountElement extends HTMLElement {
    private nameInput: HTMLInputElement;
    private goButton: HTMLButtonElement;
    async connectedCallback() {
        const account = await UserStore.instance.currentUser();
        if (account.username && account.username !== "") {
            this.remove();
            return;
        }

        this.className += ` ${userStyle.userAccount}`;
        this.innerHTML = this.view();
        this.nameInput = this.querySelector("[name=name]");
        this.goButton = this.querySelector("[name=go]");
        setTimeout(() => {
            this.nameInput.focus();
        }, 200);

        this.goButton.addEventListener("click", this.goHandler);
    }

    private goHandler = async () => {
        const userAccount: UserAccount = {
            username: this.nameInput.value
        };

        await UserStore.instance.change(userAccount);
        this.remove();
    };

    private view = () => `
        <div class="${formsStyle.fieldSet}">
            <label>Please enter your name</label>
            <input type="text" name=name />
        </div>

        <div class="${formsStyle.fieldSet}">
            <button class="${formsStyle.primary}" name=go>GO</button>
        </div>
    `;
}

customElements.define("user-account", UserAccountElement);