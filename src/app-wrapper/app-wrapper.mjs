import loadHtml from "../shared/loadHtml.mjs";
import css from './app-wrapper.css' assert{type: 'css'};

export default class AppWrapper extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const originalHtml = this.innerHTML;
        this.attachShadow({ mode: 'open' });

        await loadHtml(this.shadowRoot, 'app-wrapper.html', import.meta.url);
        this.shadowRoot.adoptedStyleSheets = [css];

        if (this.content.length) {
            this.content[0].innerHTML = originalHtml;
        }

        if (this.headerText) {
            const header = this.shadowRoot.querySelector('.app-wrapper-header');

            if (header) { header.innerText = this.headerText; }
        }
    }

    get content() {
        return this.shadowRoot.querySelectorAll('.template-content');
    }

    get headerText() {
        return this.getAttribute('header');
    }
}

customElements.define('app-wrapper', AppWrapper);