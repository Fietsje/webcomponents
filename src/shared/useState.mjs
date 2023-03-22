export default function useState(initialValue) {
    let state = initialValue;
    const getValue = () => state;
    const setValue = (newValue) => state = newValue;
    return [getValue, setValue];
}