import hashCode from "./hashCode.mjs";

export default async function loadStylesheet(htmlRelativeUrl, baseUrl) {
    const styleSheets = document.querySelectorAll('style');
    const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
    const hash = hashCode(htmlUrl).toString();
    const found = [].some.call(styleSheets, (sheet) => sheet.getAttribute('id') === hash);

    if (!found) {
        const result = await fetch(htmlUrl).then(response => response.text());
        const sheet = document.head.appendChild(document.createElement('style'));
        sheet.setAttribute('id', hash);
        sheet.setAttribute('type', 'text/css');
        sheet.innerText = result;
    }
}