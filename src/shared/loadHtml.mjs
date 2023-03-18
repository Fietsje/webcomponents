import hashCode from "./hashCode.mjs";

class HtmlRequests {
    static requests = [];
}

export default async function loadHtml(element, htmlRelativeUrl, baseUrl) {
    return new Promise(async (resolve) => {
        const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
        const hash = hashCode(htmlUrl).toString();
        let scripts = document.querySelectorAll('script');
        let foundScript = [].find.call(scripts, (item) => item.getAttribute('id') === hash);
        let html = !!foundScript ? foundScript.innerHTML : null;

        if (html) {
            element.innerHTML = html;
            return resolve();
        }

        HtmlRequests.requests.push(htmlUrl);
        console.log(HtmlRequests.requests);

        const newScript = document.createElement('script');
        newScript.setAttribute('id', hash);
        newScript.setAttribute('type', 'text/html');
        newScript.setAttribute('data-url', htmlUrl);
        newScript.appendChild(document.createTextNode(''));

        scripts = document.querySelectorAll('script');
        foundScript = [].find.call(scripts, (item) => item.getAttribute('id') === hash);
        if (!foundScript) {
            document.head.appendChild(newScript);
            foundScript = newScript;
        }

        html = await fetch(htmlUrl).then(response => response.text());
        while (foundScript.firstChild) {
            foundScript.removeChild(foundScript.firstChild);
        }
        foundScript.appendChild(document.createTextNode(html));

        element.innerHTML = html;
        return resolve();
    });
}