export class UrlProvider {
    static get APIRoot() {
        switch(window.location.hostname) {
            case "127.0.0.1": return "https://localhost:5001";
            case "client.ss.ftl.dk": return "https://api.ss.ftl.dk";
        }
    } 
}