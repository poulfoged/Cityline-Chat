// import { CitylineClient } from "cityline-client";
import { CitylineClient } from "./CitylineClient";
import { UrlProvider } from "lib/UrlProvider";
import { RequestBuilder } from "lib/HTTP";

export class CitylineSingleton {
    private static _client: CitylineClient = new CitylineClient(`${UrlProvider.APIRoot}/api/cityline`, async () => await RequestBuilder.post.authenticated());
    static get client() {
        return CitylineSingleton._client;
    }
}

const cityline = CitylineSingleton.client;
export { cityline };
