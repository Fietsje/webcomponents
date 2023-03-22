export default function debounce(callback, delay = 1000) {
    let timeout = null;
    return (...args) => new Promise(resolve => {
        clearTimeout(timeout);
        timeout = setTimeout(() => resolve(callback(...args)), delay);
    });
}