import { DateTime } from "../../library/Datetime";
import { Formatting } from "../../library/Formatting";


class LocalDateElement extends HTMLElement {
    private timer: number;
    private started = false;
    private utcDate: Date;

    private pad(source = "", wantedLength = 2, symbol = "0") {
        return source.length >= wantedLength ? source : new Array(wantedLength - source.length + 1).join(symbol) + source;
    }
    connectedCallback() {
        const datetime = this.getAttribute("datetime");
        
        if (datetime) {
            try {
                this.utcDate = new Date(datetime);
            }
            catch(error) {
                console.log(`Unable to parse date '${datetime}'`);
                return;
            }
            
        }

        if (this.hasAttribute("use-words")) {
            this.renderAsTextHandler();
        } else {
            this.renderAsDateHandler();
        }
    }

    private nowUtc(): Date {
        // const now = new Date();
        // return new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        return new Date();
    }

    private renderAsTextHandler = () => {
        this.innerText = this.timeDifference(this.nowUtc(), this.utcDate);
    }

    private renderAsDateHandler = () => {
        const localDate = DateTime.UTCToLocal(this.utcDate);
        this.innerText = Formatting.shortDateTime(localDate);
    }

    private timeDifference(current: Date, previous: Date) {
        console.log("comparing", current.toISOString(), previous.toISOString());
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const elapsed = current.getTime() - previous.getTime();
        
        if (elapsed < msPerMinute) {
            return "lige nu";
        }

        if (elapsed < msPerMinute*2) {
            return "et minut siden";
        }

        else if (elapsed < msPerHour) {
            return `${Math.floor(elapsed / msPerMinute)} minutter siden`;
        }

        // Less than 2 hours ago.
        else if (elapsed < msPerHour*2) {
            return "En time siden";
        }

        else if (elapsed < msPerDay) {
            return `${Math.floor(elapsed / msPerHour)} timer siden`;
        }

        else if (elapsed < msPerDay * 2) {
            return "i går";
        }

        
        else if (elapsed < msPerDay * 7) {
            return `${Math.floor(elapsed / msPerDay)} dage siden`;
        }

        else if (elapsed < msPerDay * 31) {
            const weeks = Math.floor(elapsed / (msPerDay*7));
            return `${weeks} uge${weeks > 1 ? "r" : ""} siden`;
        }
        
        // fall back to date
        this.renderAsDateHandler();
    }
}

customElements.define("local-date", LocalDateElement);