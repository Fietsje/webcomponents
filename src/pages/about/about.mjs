import load from "../../shared/loadFile.mjs";

export default class AboutPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = await load('about.html', import.meta.url);
    }
}

customElements.define('app-about', AboutPage);