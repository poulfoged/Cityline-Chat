class RequestAnimationFrame {
    constructor() {
        let lastTime = 0;

        // add requestAnimationFrame2
        if (!window.requestAnimationFrame)
            (<any>window).requestAnimationFrame = (callback, element) => {
                const currTime = new Date().getTime();
                const timeToCall = Math.max(0, 16 - (currTime - lastTime));
                const id = window.setTimeout(() => { callback(currTime + timeToCall); },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        // add cancelAnimationFrame
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = id => {
                clearTimeout(id);
            };
    }
}

let __ = new RequestAnimationFrame();