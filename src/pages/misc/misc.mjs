import loadHtml from "../../shared/loadHtml.mjs";
import css from './misc.css' assert{type: 'css'};

export default class MiscPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [css];
        await loadHtml(this.shadowRoot, 'misc.html', import.meta.url);
    }
}

customElements.define('app-misc', MiscPage);