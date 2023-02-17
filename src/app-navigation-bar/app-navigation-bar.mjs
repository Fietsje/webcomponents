import load from '../shared/loadFile.mjs';
import css from './app-navigation-bar.css' assert {type: 'css'};

export default class AppNavigationBar extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = await load('app-navigation-bar.html', import.meta.url);
        this.shadowRoot.adoptedStyleSheets = [css];
    }
}
customElements.define('app-navigation-bar', AppNavigationBar);
