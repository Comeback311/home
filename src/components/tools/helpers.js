/**
 * Модифицирует входной текст в строку вида 
 * "Test test tEsT" -> "test-test-test"
 */
const beautifyAnchorText = function(text) { 
    return text.toLowerCase().split(' ').join('-');
}

/**
 * Вставляет скрипт в конец элемента root
 */
const inlineScript = function(src) {
    const root = document.body.children[0];

    if (!root || !src) return;

    const script = document.createElement('script');

    script.src = src;
    script.async = true;

    root.appendChild(script);
}

/**
 * Удаляет скрипт из элемента root
 * Выполнять в componentDidMount компонента
 */
const removeScript = function(src) {
    const root = document.body.children[0] || {};
    const rootChildren = root.children || [];

    if (!root || !src || !rootChildren.length) return;

    const scriptElem = rootChildren[rootChildren.length - 1] || {};

    if (scriptElem.src === src) {
        root.removeChild(scriptElem)
    }
}

export { 
    beautifyAnchorText,
    inlineScript,
    removeScript
}
