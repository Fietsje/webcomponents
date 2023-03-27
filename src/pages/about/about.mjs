import loadHtml from "../../shared/loadHtml.mjs";
import css from './about.css' assert{type: 'css'};

export default class AboutPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [css];
        await loadHtml(this.shadowRoot, 'about.html', import.meta.url);
    }
}

customElements.define('app-about', AboutPage);