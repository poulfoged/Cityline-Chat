import EventTarget from "@ungap/event-target";
import { RequestBuilder } from "lib/HTTP";
import { UrlProvider } from "lib/UrlProvider";
import { ClassTypename, Typename } from "lib/Types";
import { cityline } from "features/cityline";

export class ChatStore {
    private _sentences:{ [key: string]: Sentence[] } = {};
    private eventTarget = new EventTarget();
    private static _chatStore = new ChatStore();
    public static get instance() { return ChatStore._chatStore; }
    private constructor() {
        cityline.addEventListener("sentences", this.sentenceHandler);
    } 

    async getMessages(channelId: string) {
        await cityline.getFrame("sentences");
        return this._sentences[channelId] || [];
    }

    // private emit<K extends Extract<keyof EventMap, string>>(type: K, ev: (type: K) => EventMap[K]) {
    //     return this.eventTarget.dispatchEvent(ev(type));
    // }

    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ) {
        return this.eventTarget.addEventListener(type, listener, options);
    }

    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions
    ) {
        this.eventTarget.removeEventListener(type, listener, options);
    }

    private sentenceHandler = (event: CustomEvent<Sentence[]>) => {
        const sentencesPayload :{ [key: string]: Sentence[] } = {};
        event.detail.forEach(sentence => {
            if (!this._sentences[sentence.channelId])
                this._sentences[sentence.channelId] = [];
        
            this._sentences[sentence.channelId].push(sentence);

            if (!sentencesPayload[sentence.channelId])
                sentencesPayload[sentence.channelId] = [];
        
            sentencesPayload[sentence.channelId].push(sentence);
        });

        Object.keys(sentencesPayload).forEach(key => {
            this.eventTarget.dispatchEvent(new CustomEvent(`message-${key}`, { detail: sentencesPayload[key] }));
        });


        //this.emit("chat-store-message", t => new CustomEvent(t, { detail: event.detail }));
    }

    async say(channelId: string, sentence: Sentence) : Promise<boolean> {
        const response = await fetch(`${UrlProvider.APIRoot}/api/chat/${channelId}`, (await RequestBuilder.post.authenticated()).setJSON(sentence));
        return response.ok;
    } 

}

export interface Sentence {
    text: string;
    channelId?: string,
    userId?: string,
    username?: string,
    created?: string
}