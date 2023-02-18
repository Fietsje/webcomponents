import load from "../../shared/loadFile.mjs";

export default class ContactPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = await load('contact.html', import.meta.url);
    }
}

customElements.define('app-contact', ContactPage);