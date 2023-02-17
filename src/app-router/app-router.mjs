export default class AppRouter extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        window.addEventListener('popstate', (e) => {
            this.loadRoute(e.target.location.hash);
        });
        this.loadRoute(window.location.hash);
    }

    loadRoute(route) {
        let foundRoute = null;
        for (let index = 0; index < this.routes.length; index++) {
            const element = this.routes[index];
            if (element.getAttribute('path') === route) {
                foundRoute = element;
            }
        }

        if (foundRoute) {
            const name = foundRoute.getAttribute('component');
            const component = document.createElement(name);
            this.outlet.replaceChildren(component);
        }
    }

    get routes() {
        return this.querySelectorAll('route');
    }

    get outlet() {
        return this.querySelector('outlet');
    }
}

customElements.define('app-router', AppRouter);