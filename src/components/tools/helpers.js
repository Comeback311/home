 /**
 * Модифицирует входной текст в строку вида 
 * "Test test tEsT" -> "test-test-test"
 */
function beautifyAnchorText(text) {
    return text.toLowerCase().split(' ').join('-');
}
