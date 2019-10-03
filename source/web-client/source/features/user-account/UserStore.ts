import EventTarget from "@ungap/event-target";
import { RequestBuilder } from "lib/HTTP";
import { UrlProvider } from "lib/UrlProvider";
import { cityline } from 'features/cityline';

export class UserStore {
    private eventTarget = new EventTarget();
    private static _instance = new UserStore();
    public static get instance() { return UserStore._instance; }
    private constructor() { } 

    async change(userAccount: UserAccount) : Promise<boolean> {
        const response = await fetch(`${UrlProvider.APIRoot}/api/user`, (await RequestBuilder.post.authenticated()).setJSON(userAccount));
        return response.ok;
    } 

    async currentUser() {
        const user = await cityline.getFrame<UserAccount>("user-account");
        return user;
    }
}

export interface UserAccount {
    username: string
    id?: string;
}