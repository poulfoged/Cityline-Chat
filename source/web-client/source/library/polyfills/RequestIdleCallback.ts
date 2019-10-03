import "lib/polyfills/RequestIdleCallback.js";

export interface RequestIdleCallbackOptions {
    timeout?: number; 
}

export interface RequestIdleCallbackHandle {
}

export interface RequestIdleCallbackParameters {
    didTimeout: boolean;
    timeRemaining: number;
}

declare global {
    interface Window {
        requestIdleCallback(callback: (RequestIdleCallbackParameters) => void, options?: RequestIdleCallbackOptions): RequestIdleCallbackHandle;
        cancelIdleCallback(requestIdleCallbackHandle: RequestIdleCallbackHandle);
    }
}