import loadStylesheet from "../../shared/loadStylesheet.mjs";
import loadHtml from "../../shared/loadHtml.mjs";

export default class ContactPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        loadHtml(this, 'contact.html', import.meta.url);
        loadStylesheet('contact.css', import.meta.url);
    }
}

customElements.define('app-contact', ContactPage);