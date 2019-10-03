import { ClassTypename, Typename } from "lib/Types";

@ClassTypename("UserContextStore")
export class UserContextStore {
    private static _instance = new UserContextStore();
    private _deviceId: string;
    private constructor() {}

    static get instance() { return UserContextStore._instance; } 
    
    async deviceId() : Promise<string> {
        this.initialize();
        return Promise.resolve(this._deviceId);
    }

    private initialize() {
        if (this._deviceId)
            return;

        this._deviceId = window.localStorage.getItem(`${UserContextStore[Typename]}-user-id`);
        if (!this._deviceId || this._deviceId.length !== 32) {
            this._deviceId = UserContextStore.guid();
            window.localStorage.setItem(`${UserContextStore[Typename]}-user-id`, this._deviceId);
        }
    }

    private static guid = () => {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    }
}