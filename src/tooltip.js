

export function tooltip(el) {
    return {
        show() {},
        hide() {
            el.style.display = 'none';
        }
    }
}