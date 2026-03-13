function editElement(htmlElement, stringToFind, replacer) {
    let originalText = htmlElement.textContent;
    let updatedText = originalText.replaceAll(stringToFind, replacer);

    htmlElement.textContent = updatedText;
} 