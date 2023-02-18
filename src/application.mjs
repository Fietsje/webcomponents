import css from './application.css' assert {type: 'css'};

import AppRoot from "./app-root/app-root.mjs";
import AppNavigationBar from "./app-navigation-bar/app-navigation-bar.mjs";
import AppRouter from './app-router/app-router.mjs';
import HomePage from './pages/home/home.mjs';
import AboutPage from './pages/about/about.mjs';
import ContactPage from './pages/contact/contact.mjs';
import MiscPage from './pages/misc/misc.mjs';

export default [
    AppRoot,
    AppNavigationBar,
    AppRouter,
    HomePage,
    AboutPage,
    ContactPage,
    MiscPage
];
(function main() {
    document.adoptedStyleSheets.push(css);
}());

