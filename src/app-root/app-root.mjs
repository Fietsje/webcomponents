import loadHtml from '../shared/loadHtml.mjs';
import css from './app-root.css' assert{type: 'css'};

export default class AppRoot extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.attachShadow({ mode: 'open' });
        loadHtml(this.shadowRoot, 'app-root.html', import.meta.url);
        this.shadowRoot.adoptedStyleSheets = [css];
    }
}

customElements.define('app-root', AppRoot);