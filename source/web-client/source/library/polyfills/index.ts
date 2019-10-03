import "./classList.js";
import "es6-promise/auto";
import "whatwg-fetch";
import "./RequestAnimationFrame";
import "./RequestIdleCallback";
import { DOM } from "lib/DOM";
import * as smoothscroll from "smoothscroll-polyfill";
import { Browser } from "lib/Browser";
import "./toggleAttribute.js";
// these goes hand in hand with web-components
import "./custom-elements-es5-adapter.js";
import "document-register-element";

window.setTimeout(async () => {
    await DOM.ready();

    // kick off the polyfill!
    smoothscroll.polyfill();

    if (Browser.isIOSApp()) {
        const FastClick = await import( /* webpackChunkName: "platform" */ "fastclick");
        FastClick.attach(document.body);
    }
    
    const handleFirstTab = (e) => {
        if (e.keyCode === 9) { // the "I am a keyboard user" key
            document.body.classList.add("tabbing");
            window.removeEventListener("keydown", handleFirstTab);
        }
    }
    
    window.addEventListener("keydown", handleFirstTab);
});


