function extractText() {
    let listItems = document.querySelectorAll('li');
    let textArea = document.getElementById('result');

    for(let list of listItems) {
        let text = list.textContent;
        textArea.textContent += text + '\n';
    }
}