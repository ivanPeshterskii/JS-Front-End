const baseUrl = 'http://localhost:3030/jsonstore/orders';

const loadBtn = document.getElementById('load-orders');
const orderBtn = document.getElementById('order-btn');
const editBtn = document.getElementById('edit-order');

const nameInput = document.getElementById('name');
const quantityInput = document.getElementById('quantity');
const dateInput = document.getElementById('date');

const list = document.getElementById('list');

let editId = null;

loadBtn.addEventListener('click', loadOrders);
orderBtn.addEventListener('click', createOrder);
editBtn.addEventListener('click', editOrder);

async function loadOrders() {
    list.innerHTML = '';

    const res = await fetch(baseUrl);
    const data = await res.json();

    Object.values(data).forEach(order => {

        const container = document.createElement('div');
        container.className = 'container';

        const h2 = document.createElement('h2');
        h2.textContent = order.name;

        const h3Date = document.createElement('h3');
        h3Date.textContent = order.date;

        const h3Quantity = document.createElement('h3');
        h3Quantity.textContent = order.quantity;

        const changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.className = 'change-btn';

        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.className = 'done-btn';

        container.appendChild(h2);
        container.appendChild(h3Date);
        container.appendChild(h3Quantity);
        container.appendChild(changeBtn);
        container.appendChild(doneBtn);

        list.appendChild(container);

        changeBtn.addEventListener('click', () => {

            nameInput.value = order.name;
            quantityInput.value = order.quantity;
            dateInput.value = order.date;

            editId = order._id;

            editBtn.disabled = false;
            orderBtn.disabled = true;

            container.remove();
        });

        doneBtn.addEventListener('click', async () => {
            await fetch(`${baseUrl}/${order._id}`, {
                method: 'DELETE'
            });

            loadOrders();
        });

    });
}

async function createOrder(e) {
    e.preventDefault();

    const name = nameInput.value;
    const quantity = quantityInput.value;
    const date = dateInput.value;

    if (!name || !quantity || !date) {
        return;
    }

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            quantity,
            date
        })
    });

    clearInputs();
    loadOrders();
}

async function editOrder(e) {
    e.preventDefault();

    const name = nameInput.value;
    const quantity = quantityInput.value;
    const date = dateInput.value;

    await fetch(`${baseUrl}/${editId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            quantity,
            date,
            _id: editId
        })
    });

    editBtn.disabled = true;
    orderBtn.disabled = false;

    clearInputs();
    loadOrders();
}

function clearInputs() {
    nameInput.value = '';
    quantityInput.value = '';
    dateInput.value = '';
}