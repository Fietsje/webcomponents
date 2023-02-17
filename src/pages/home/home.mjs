import load from "../../shared/loadFile.mjs";

export default class HomePage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = await load('home.html', import.meta.url);
    }
}

customElements.define('app-home', HomePage);