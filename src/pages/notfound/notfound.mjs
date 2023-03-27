import loadHtml from "../../shared/loadHtml.mjs";
import css from './notfound.css' assert{type: 'css'};

export default class NotFoundPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [css];
        await loadHtml(this.shadowRoot, 'notfound.html', import.meta.url);
    }
}

customElements.define('app-notfound', NotFoundPage);