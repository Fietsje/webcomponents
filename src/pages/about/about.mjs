import loadStylesheet from "../../shared/loadStylesheet.mjs";
import loadHtml from "../../shared/loadHtml.mjs";

export default class AboutPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        loadHtml(this, 'about.html', import.meta.url);
        loadStylesheet('about.css', import.meta.url);
    }
}

customElements.define('app-about', AboutPage);