import hashCode from "./hashCode.mjs";

export default async function loadHtml(element, htmlRelativeUrl, baseUrl) {
    const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
    const hash = hashCode(htmlUrl).toString();
    let scripts = document.querySelectorAll('script');
    let foundScript = [].find.call(scripts, (item) => item.getAttribute('id') === hash);
    let html = !!foundScript ? foundScript.innerHTML : null;

    if (!html) {
        const newScript = document.createElement('script');
        newScript.setAttribute('id', hash);
        newScript.setAttribute('type', 'text/html');

        scripts = document.querySelectorAll('script');
        foundScript = [].find.call(scripts, (item) => item.getAttribute('id') === hash);
        if (!foundScript) {
            document.head.appendChild(newScript);
        }

        html = await fetch(htmlUrl).then(response => response.text());
        newScript.appendChild(document.createTextNode(html));
    }

    element.innerHTML = html;
}