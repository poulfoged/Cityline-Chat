export class DOMLite {

    static createIsolated(): HTMLElement {
        const d = document;
        let root = d.createElement("ls-bm");
        d.body.appendChild(root);

        if ((<any>root).attachShadow)
            root = (<any>root).attachShadow({ mode: "open" });

        root.innerHTML = DOMLite.isolatedElementView();

        return <HTMLElement>root.querySelector("div");
    }

    static isolatedElementView = () => `
            <style>
                :host {
                  all: initial;
                }
                #ls1289 {
                    all: initial;
                    
                    width:100%;
                    height:100%;
                    position:fixed;
                    top:0;
                    left:0;
                    pointer-events:none;
                    z-index: 2147483648;
                    font-family: sans-serif;
        
                    * {
                        all: unset;
                    }
                }
            </style>
            <div id=ls1289></div>
        `;
}