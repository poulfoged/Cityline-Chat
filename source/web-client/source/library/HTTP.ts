import { UserContextStore } from "features/user-context";

export class RequestBuilder implements RequestInit {
    public headers = { };
    public body: any;

    constructor(public method: string) {}

    static get delete() : RequestBuilder {
        return new RequestBuilder("delete");
    }

    static get post() : RequestBuilder {
        return new RequestBuilder("post");
    }

    static get get() : RequestBuilder {
        return new RequestBuilder("get");
    }

    authenticated() : Promise<RequestBuilder> {
        return new Promise<RequestBuilder>(async r => {
            const deviceId = await UserContextStore.instance.deviceId();
            this.headers["device-id"] = deviceId;
            r(this);
        });
    }

    setJSON(obj: any): RequestBuilder {
        this.headers["content-type"] = "application/json";
        this.headers["Accept"] = "application/json";

        this.body = JSON.stringify(obj);
        return this;
    }
}