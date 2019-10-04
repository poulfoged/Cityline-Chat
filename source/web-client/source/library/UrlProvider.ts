export class UrlProvider {
    static get APIRoot() {
        switch(window.location.hostname) {
            case "poulfoged.github.io": return "https://chat.devchamp.com"
            case "127.0.0.1": return "https://localhost:5001";
        }
    } 
}