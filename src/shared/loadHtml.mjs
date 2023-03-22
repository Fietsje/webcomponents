import hashCode from "./hashCode.mjs";
import useState from "./useState.mjs";
import debounce from "./debounce.mjs";
import clearChildren from "./clearChildren.mjs";

let [getRequests, setRequests] = useState([]);
const install = debounce(callback => { callback(); }, 2);

export default async function loadHtml(element, htmlRelativeUrl, baseUrl) {
    return new Promise(async (resolve) => {
        getRequests().push({ element, htmlRelativeUrl, baseUrl, resolve });
        install(download);
    });
}

async function download() {
    const requests = getRequests();
    setRequests([]);

    for (let index = 0; index < requests.length; index++) {
        const job = requests[index];

        const htmlUrl = new URL(job.htmlRelativeUrl, job.baseUrl).href;
        const hash = hashCode(htmlUrl).toString();
        let scripts = document.querySelectorAll('script');
        let foundScript = [].find.call(scripts, (item) => item.getAttribute('id') === hash);
        let html = !!foundScript ? foundScript.innerHTML : null;

        if (html) {
            job.element.innerHTML = html;
            job.resolve();
        }
        else {
            const newScript = document.createElement('script');
            newScript.setAttribute('id', hash);
            newScript.setAttribute('type', 'text/html');
            newScript.appendChild(document.createTextNode(''));

            scripts = document.querySelectorAll('script');
            foundScript = [].find.call(scripts, (item) => item.getAttribute('id') === hash);
            if (!foundScript) {
                document.head.appendChild(newScript);
                foundScript = newScript;
            }

            html = await fetch(htmlUrl).then(response => response.text());
            clearChildren(foundScript);
            foundScript.appendChild(document.createTextNode(html));

            job.element.innerHTML = html;
            job.resolve();
        }
    }
}
