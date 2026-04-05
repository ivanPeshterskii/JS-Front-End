const baseUrl = 'http://localhost:3030/jsonstore/records/';

const loadBtn = document.getElementById('load-records');
const addBtn = document.getElementById('add-record');
const editBtn = document.getElementById('edit-record');

const list = document.getElementById('list');

const nameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');

let currentEditId = null;

editBtn.disabled = true;

loadBtn.addEventListener('click', loadRecords);
addBtn.addEventListener('click', addRecord);
editBtn.addEventListener('click', editRecord);

async function loadRecords() {
    list.innerHTML = '';

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach(record => {
        const li = document.createElement('li');
        li.className = 'record';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';

        const pName = document.createElement('p');
        pName.textContent = record.name;

        const pSteps = document.createElement('p');
        pSteps.textContent = record.steps;

        const pCalories = document.createElement('p');
        pCalories.textContent = record.calories;

        infoDiv.appendChild(pName);
        infoDiv.appendChild(pSteps);
        infoDiv.appendChild(pCalories);

        const btnWrapper = document.createElement('div');
        btnWrapper.className = 'btn-wrapper';

        const changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = 'Change';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        changeBtn.addEventListener('click', () => {
            nameInput.value = record.name;
            stepsInput.value = record.steps;
            caloriesInput.value = record.calories;

            currentEditId = record._id;

            editBtn.disabled = false;
            addBtn.disabled = true;
        });

        deleteBtn.addEventListener('click', async () => {
            await fetch(baseUrl + record._id, {
                method: 'DELETE'
            });

            await loadRecords();
        });

        btnWrapper.appendChild(changeBtn);
        btnWrapper.appendChild(deleteBtn);

        li.appendChild(infoDiv);
        li.appendChild(btnWrapper);

        list.appendChild(li);
    });
}

async function addRecord() {
    const name = nameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    if (!name || !steps || !calories) {
        return;
    }

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            steps,
            calories
        })
    });

    clearInputs();
    await loadRecords();
}

async function editRecord() {
    const name = nameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    if (!name || !steps || !calories || !currentEditId) {
        return;
    }

    await fetch(baseUrl + currentEditId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            steps,
            calories,
            _id: currentEditId
        })
    });

    clearInputs();
    currentEditId = null;

    editBtn.disabled = true;
    addBtn.disabled = false;

    await loadRecords();
}

function clearInputs() {
    nameInput.value = '';
    stepsInput.value = '';
    caloriesInput.value = '';
}