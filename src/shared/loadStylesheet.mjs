import hashCode from "./hashCode.mjs";

export default async function loadStylesheet(htmlRelativeUrl, baseUrl) {
    let styleSheets = document.querySelectorAll('style');
    const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
    const hash = hashCode(htmlUrl).toString();
    let found = [].some.call(styleSheets, (sheet) => sheet.getAttribute('id') === hash);

    if (!found) {
        const sheet = document.createElement('style');
        sheet.setAttribute('id', hash);
        sheet.setAttribute('type', 'text/css');

        /** Re-check for existing script first, otherwise multiples will exist */
        styleSheets = document.querySelectorAll('style');
        if (![].some.call(styleSheets, (sheet) => sheet.getAttribute('id') === hash)) {
            document.head.appendChild(sheet);
            const result = await fetch(htmlUrl).then(response => response.text());
            sheet.appendChild(document.createTextNode(result));
        }
    }
}