function solve() {
    // Get input
    const input = document.getElementById('input').value;
    const outputElement = document.getElementById('output');

    // Split by sentences (exclude empty sentenecs)
    const sentences = input
        .split('.')
        .filter(sentence => sentence.trim());

    // Generate paragraphs for each 3 sentences
    let paragraph = [];
    for (const sentence of sentences) {
        paragraph.push(sentence);

        if (paragraph.length >= 3) {
            createParagraph(paragraph.join('.'));

            // reset paragraph array
            paragraph = [];
        }
    }

    if (paragraph.length > 0) {
        createParagraph(paragraph.join('.'));
    }

    function createParagraph(text) {
        // Create paragraph element
        const pragraphElement = document.createElement('p');
        pragraphElement.textContent = text;

        // Append paragraph
        outputElement.appendChild(pragraphElement);
    }
}
