import EventTarget from "@ungap/event-target";
import { RequestBuilder } from "lib/HTTP";
import { UrlProvider } from "lib/UrlProvider";
import { ClassTypename, Typename } from "lib/Types";
import { cityline } from "features/cityline";

export class ChannelStore {
    private static _instance = new ChannelStore();
    public static get instance() { return ChannelStore._instance; }
    private constructor() {}

    async create(sentence: Channel) : Promise<Channel> {
        const response = await fetch(`${UrlProvider.APIRoot}/api/channel`, (await RequestBuilder.post.authenticated()).setJSON(sentence));
        const newChannel = response.json();
        return newChannel;
    } 
   
}

export interface Channel {
    id?: string;
    name: string;
    isPublic: boolean;
    allowedUsers: string[];
}