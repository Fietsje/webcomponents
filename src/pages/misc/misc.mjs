import loadStylesheet from "../../shared/loadStylesheet.mjs";
import loadHtml from "../../shared/loadHtml.mjs";

export default class MiscPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        loadHtml(this, 'misc.html', import.meta.url);
        loadStylesheet('misc.css', import.meta.url);
    }
}

customElements.define('app-misc', MiscPage);