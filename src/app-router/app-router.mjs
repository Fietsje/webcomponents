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
        /** IDEAS:
         * 1) split routes so that parameters can be passed
         * 2) make routes be able to have children
         */
        let foundRoute = [].find.call(this.routes, (item) => item.getAttribute('path') === route);

        if (!foundRoute) {
            foundRoute = [].find.call(this.routes, (item) => item.getAttribute('path') === '*');
        }

        if (!foundRoute) {
            throw `Route not found: ${route}`;
        }

        const name = foundRoute.getAttribute('component');
        const redirectTo = foundRoute.getAttribute('redirectto');
        if (!name && !redirectTo) {
            throw `Cannot process found route: ${route}`;
        }

        if (!name) {
            history.pushState(null, null, redirectTo);
            window.location.assign(redirectTo);
            return;
        }

        const component = document.createElement(name);
        this.outlet.replaceChildren(component);
        document.title = foundRoute.getAttribute('title') || document.URL;
    }

    get routes() {
        return this.querySelectorAll('route');
    }

    get outlet() {
        return this.querySelector('outlet');
    }
}

customElements.define('app-router', AppRouter);