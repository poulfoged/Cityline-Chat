export class Browser {
    public static getQueryParam(param) : string {
        const result =  window.location.search.match(
            new RegExp( `(\\?|&)${param}(\\[\\])?=([^&]*)`)
        );

        return result ? result[3] : undefined;
    }

    public static isMobileLike() {
         // this value must follow the value in SidePanelStyle
        return  (window.innerWidth <= 850);
    }

    public static isApp() {
        if ((<any>window).plugins)
            return true;
        
        return false;
    }

    public static isIOSApp() {
        return window.navigator.userAgent.indexOf("l-i-a") !== -1; 
    } 

    public static isTouch = (("ontouchstart" in window) || (navigator.msMaxTouchPoints > 0));
}