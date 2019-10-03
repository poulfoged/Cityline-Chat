import { PromptOption } from ".";

export class PromptDialogActivator {
    static async prompt(text: string, options: PromptOption[]) : Promise<string> {
        const dialog = document.createElement("prompt-dialog");
        dialog.setAttribute("text", text);
        dialog.innerHTML = `<script type="application/json+dialog">${JSON.stringify(options)}</script>`;
        document.body.append(dialog);
        
        return new Promise<string>(r => {
            const handler = (event: CustomEvent<string>) => {
                dialog.removeEventListener("decided", handler);
                r(event.detail);
            };

            dialog.addEventListener("decided", handler);
        });
    }
}

