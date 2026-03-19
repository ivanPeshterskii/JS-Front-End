function addItem() {
    const text = document.getElementById('newItemText').value;
    const input = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    const li = document.createElement('li');

    li.textContent = text;

    ulElement.append(li);

    text.textContent = '';
}