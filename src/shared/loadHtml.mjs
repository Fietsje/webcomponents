export default async function loadHtml(element, htmlRelativeUrl, baseUrl) {
    const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
    const html = await fetch(htmlUrl).then(response => response.text());
    element.innerHTML = html;
}