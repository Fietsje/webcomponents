import hashCode from "./hashCode.mjs";

export default async function loadHtml(element, htmlRelativeUrl, baseUrl) {
    const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
    const hash = hashCode(htmlUrl).toString();
    const scripts = document.querySelectorAll('script');
    const foundScript = [].find.call(scripts, (item) => item.getAttribute('id') === hash);
    let html;

    if (!foundScript) {
        html = await fetch(htmlUrl).then(response => response.text());
        const newScript = document.createElement('script');
        document.head.appendChild(newScript);
        newScript.setAttribute('id', hash);
        newScript.setAttribute('type', 'text/html');
        newScript.innerText = html;
    }
    else {
        html = foundScript.innerText;
    }
    element.innerHTML = html;
}