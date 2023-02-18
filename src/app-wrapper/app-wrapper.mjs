import loadHtml from "../shared/loadHtml.mjs";
import loadStylesheet from "../shared/loadStylesheet.mjs";

export default class AppWrapper extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const originalHtml = this.innerHTML;

        await loadHtml(this, 'app-wrapper.html', import.meta.url);
        await loadStylesheet('app-wrapper.css', import.meta.url);

        if (this.content.length) {
            this.content[0].innerHTML = originalHtml;
        }

        if (this.headerText) {
            this.querySelector('.app-wrapper-header').innerText = this.headerText;
        }
    }

    get content() {
        return this.querySelectorAll('.template-content');
    }

    get headerText() {
        return this.getAttribute('header');
    }
}

customElements.define('app-wrapper', AppWrapper);