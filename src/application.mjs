import css from './application.css' assert {type: 'css'};

import AppRoot from "./components/app-root/app-root.mjs";
import AppNavigationBar from "./components/app-navigation-bar/app-navigation-bar.mjs";
import AppRouter from './components/app-router/app-router.mjs';
import HomePage from './pages/home/home.mjs';
import AboutPage from './pages/about/about.mjs';
import MiscPage from './pages/misc/misc.mjs';
import NotFoundPage from './pages/notfound/notfound.mjs';
import AppCard from './components/app-card/app-card.mjs';

export default [
    AppRoot,
    AppNavigationBar,
    AppRouter,
    AppCard,
    HomePage,
    AboutPage,
    MiscPage,
    NotFoundPage
];
(function main() {
    document.adoptedStyleSheets.push(css);
}());

