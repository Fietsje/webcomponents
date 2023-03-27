import loadHtml from "../../shared/loadHtml.mjs";
import css from './home.css' assert{type: 'css'};

export default class HomePage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [css];
        await loadHtml(this.shadowRoot, 'home.html', import.meta.url);
    }
}

customElements.define('app-home', HomePage);