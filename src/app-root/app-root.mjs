import loadFile from '../shared/loadFile.mjs';
import css from './app-root.css' assert{type: 'css'};

export default class AppRoot extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = await loadFile('app-root.html', import.meta.url);
        this.shadowRoot.adoptedStyleSheets = [css];

    }
}

customElements.define('app-root', AppRoot);