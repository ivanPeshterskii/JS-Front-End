function addItem() {

    let input = document.getElementById('newItemText').value;

    let list = document.getElementById('items');

    let listItem = document.createElement('li');

    listItem.textContent = input;

    list.append(listItem);

    let remove = document.createElement('a');
    let linked = document.createTextNode('[Delete]');

    remove.appendChild(linked);
    remove.href = '#';
    remove.addEventListener('click', deleteItem);

    listItem.appendChild(remove);
    list.appendChild(listItem);

    function deleteItem() {
        listItem.remove();
    }
}