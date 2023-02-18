import loadStylesheet from "../../shared/loadStylesheet.mjs";
import loadHtml from "../../shared/loadHtml.mjs";

export default class NotFoundPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        loadHtml(this, 'notfound.html', import.meta.url);
        loadStylesheet('notfound.css', import.meta.url);
    }
}

customElements.define('app-notfound', NotFoundPage);