import css from './application.css' assert {type: 'css'};

import AppRoot from "./app-root/app-root.mjs";
import AppNavigationBar from "./app-navigation-bar/app-navigation-bar.mjs";
import AppRouter from './app-router/app-router.mjs';
import HomePage from './pages/home/home.mjs';
import AboutPage from './pages/about/about.mjs';
import ContactPage from './pages/contact/contact.mjs';
import MiscPage from './pages/misc/misc.mjs';
import NotFoundPage from './pages/notfound/notfound.mjs';
import AppWrapper from './app-wrapper/app-wrapper.mjs';

export default [
    AppRoot,
    AppNavigationBar,
    AppRouter,
    AppWrapper,
    HomePage,
    AboutPage,
    ContactPage,
    MiscPage,
    NotFoundPage
];
(function main() {
    document.adoptedStyleSheets.push(css);
}());

