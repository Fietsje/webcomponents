export default async function loadStylesheet(htmlRelativeUrl, baseUrl) {
    const styleSheets = document.querySelectorAll('style');
    const found = [].some.call(styleSheets, (sheet) => sheet.getAttribute('id') === htmlRelativeUrl);

    if (!found) {
        const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
        const result = await fetch(htmlUrl).then(response => response.text());
        const sheet = document.head.appendChild(document.createElement('style'));
        sheet.setAttribute('id', htmlRelativeUrl);
        sheet.innerText = result;
    }
}