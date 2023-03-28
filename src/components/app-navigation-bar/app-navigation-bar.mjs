import load from '../../shared/loadFile.mjs';
import loadHtml from '../../shared/loadHtml.mjs';
import css from './app-navigation-bar.css' assert {type: 'css'};

export default class AppNavigationBar extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [css];
        loadHtml(this.shadowRoot, 'app-navigation-bar.html', import.meta.url);
    }
}
customElements.define('app-navigation-bar', AppNavigationBar);
