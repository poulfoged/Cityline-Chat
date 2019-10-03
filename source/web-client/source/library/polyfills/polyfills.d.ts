
export interface RequestIdleCallbackOptions {
    timeout?: number; 
}

export interface RequestIdleCallbackHandle {
}

export interface RequestIdleCallbackParameters {
    didTimeout: boolean;
    timeRemaining(): number;
}

export interface TapticEngineUnofficial {
    weakBoom();
    strongBoom();
    burst();
}

export interface TapticEngine {
    unofficial: TapticEngineUnofficial;
}

export interface StatusBar {
    overlaysWebView(status: boolean);
    styleDefault();
    styleLightContent();
    styleBlackTranslucent();
    styleBlackOpaque();
    hide();
    show();
    isVisible: boolean;
    backgroundColorByName(name: string);
    backgroundColorByHexString(hex: string);
}

declare global {
    interface Window {
        requestIdleCallback(callback: (RequestIdleCallbackParameters) => void, options?: RequestIdleCallbackOptions): RequestIdleCallbackHandle;
        cancelIdleCallback(requestIdleCallbackHandle: RequestIdleCallbackHandle);
        require(src: string): string;
        TapticEngine: TapticEngine;
        StatusBar: StatusBar;
    }

    interface HTMLElement {
        insertAdjacentHTML(where: InsertAdjacentHTMLPosition, html: string): void;
    }

    export type InsertAdjacentHTMLPosition = "afterbegin" | "afterend" | "beforeend" | "afterend";
}

