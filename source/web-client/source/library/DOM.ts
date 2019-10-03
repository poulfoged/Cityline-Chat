import { DOMLite } from "lib/DOMLite";

export class DOM extends DOMLite  {
    private static elementsQuery = (form: HTMLElement) => [].slice.call(form.querySelectorAll("input, textarea"));

    static serializeInto(root: HTMLElement, source: any): void {
        DOM.elementsQuery(root).forEach((element: HTMLInputElement) => {

            const path = element.name.split(".");

            let leaf = source;
            path.forEach(pathElement => {
                if (pathElement === path[path.length - 1]) {

                    if (Array.isArray(leaf[pathElement]))
                        leaf[pathElement] = element.value.split(",");
                    else if (element.type === "checkbox") {
                        leaf[pathElement] = element.checked;
                    } else
                        leaf[pathElement] = element.value;
                    return;
                }

                leaf = leaf[pathElement] || {};
            });
        });
    }

    static serialize<TResult>(root: HTMLElement) {
        const source = {};
        DOM.elementsQuery(root).forEach((element: HTMLInputElement) => {
            source[element.name] = element.value;
        });
        return <TResult>source;
    }

    static deserialize<TSource>(root: HTMLElement, source: TSource) {
        DOM.elementsQuery(root).forEach((element: HTMLInputElement) => {
            element.value = source[element.name];
        });
    }

    static toggleAttribute(element: HTMLElement, name: string): boolean {
        if (element.hasAttribute(name)) {
            element.removeAttribute(name);
            return false;
        } else {
            element.setAttribute(name, "");
            return true;
        }
            
    }

    static ready(): Promise<any> {
        return new Promise((resolve) => {
            if(
                document.readyState === "complete" ||
                (document.readyState !== "loading" && !(<any>document).documentElement.doScroll)
            ) {
                resolve();
            } else {
                document.addEventListener("DOMContentLoaded", resolve);
            }
        });
    }

    static getCookie(name:string) : string {
        const b = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return b ? b.pop() : "";
    }

    static removecookie(name: string) {
        document.cookie = `${name}=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    };

    static async configurePage() {
        await DOM.ready();
        document.querySelector("html").classList.remove("no-js");

        // document.documentElement.classList.remove("no-js");
        // document.documentElement.classList.add("js");
    }

    static fadeOut(element: HTMLElement, speed = .1) {
        return new Promise(resolve => {
            element.style.opacity = "1";
        
            const fade = () => {
                let opacity = parseFloat(element.style.opacity);

                if ((opacity -= speed) < 0) {
                    element.style.display = "none";
                    resolve();
                } else {
                    element.style.opacity = opacity.toString();
                    requestAnimationFrame(fade);
                }
            };
            fade();
        });
    }
    
    static parse(html: string) : HTMLElement {
        const element = document.createElement("div");
        element.innerHTML = html;
        return element.firstElementChild as HTMLElement;
    }

    static fadeIn(element: HTMLElement, display: string = "block", speed = .1) {
        return new Promise(resolve => {
            element.style.opacity = "0";
            element.style.display = display;
        
            const fade = () => {
                let opacity = parseFloat(element.style.opacity);

                if (!((opacity += speed) > 1)) {
                    element.style.opacity = opacity.toString();
                    requestAnimationFrame(fade);
                } else {
                    resolve();
                }
            };
            fade();
        });
    }

    static expand(element: HTMLElement, speed = .1) {
        return new Promise(resolve => {
            let pos = 0;
            element.style.transformOrigin = "top";
            element.style.transform = "scaleY(0)";
        
            const f = () => {
                if (!((pos += speed) > 1)) {
                    element.style.transform = `scaleY(${pos})`;
                    requestAnimationFrame(f);
                } else {
                    resolve();
                }
            };
            f();
        });
    }

    static slideUp(element: HTMLElement) {
        return new Promise(resolve => {
            element.style.transform = "translate(0, 100%)";
            element.style.transition = "0.2s ease-out";
            
            requestAnimationFrame(() => {
                element.style.transform = "translate(0, 0)"
            });

        });
    }

    static sort(elements: HTMLElement[], comparer: (element:HTMLElement) => string) {
        const parent = elements[0].parentElement;
        const sorted = elements.sort( (a: HTMLElement, b: HTMLElement) => comparer(a) > comparer(b) ? 1 : -1 );
        sorted.forEach( (element: HTMLElement) => {
            parent.appendChild(element);
        });
    }

    static isElementInViewport (element: HTMLElement) {
        const rectangle = element.getBoundingClientRect();
    
        return (
            rectangle.top >= 0 &&
            rectangle.left >= 0 &&
            rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rectangle.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }

    static isScrolledToBottom (element: HTMLElement) {
        return element.scrollTop >= (element.scrollHeight - element.offsetHeight);
    }
}

DOM.configurePage().catch(console.log);


export class HeightFollower {
    constructor(private source: HTMLElement, private target: HTMLElement, private padding: number) {
        window.addEventListener("resize", this.adjustHandler, {passive: true});
        this.adjustHandler();
    }

    private adjustHandler = () => {
        this.target.style.height = `${this.source.clientHeight - this.padding}px`;
    }

    destroy() {
        window.removeEventListener("resize", this.adjustHandler);
    }
}