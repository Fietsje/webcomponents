import loadStylesheet from "../../shared/loadStylesheet.mjs";
import loadHtml from "../../shared/loadHtml.mjs";

export default class HomePage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        loadHtml(this, 'home.html', import.meta.url);
        loadStylesheet('home.css', import.meta.url);
    }
}

customElements.define('app-home', HomePage);