export default function debounce(callback, delay = 1000) {
    let timeout;

    return (...args) => new Promise(resolve => {
        if (timeout) { clearTimeout(timeout); }
        timeout = setTimeout(() => resolve(callback(...args)), delay);
    });
}