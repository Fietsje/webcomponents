import load from "../../shared/loadFile.mjs";

export default class MiscPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = await load('misc.html', import.meta.url);
    }
}

customElements.define('app-misc', MiscPage);