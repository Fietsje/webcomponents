import loadHtml from "../../shared/loadHtml.mjs";
import css from './contact.css' assert{type: 'css'};

export default class ContactPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [css];
        await loadHtml(this.shadowRoot, 'contact.html', import.meta.url);
    }
}

customElements.define('app-contact', ContactPage);