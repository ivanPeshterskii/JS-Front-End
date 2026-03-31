const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

function attachEvents() {
    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');

    loadButton.addEventListener('click', loadEntriesButtonClickHandler);

    createButton.addEventListener('click', async () => {
        // Get input element data
        const personInputElement = document.getElementById('person');
        const phoneInputElement = document.getElementById('phone');

        const person = personInputElement.value;
        const phone = phoneInputElement.value;

        // Prepare data
        const newEntry = {
            person,
            phone,
        };

        // Create request
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEntry),
        });
        
        // Reload entries
        loadEntriesButtonClickHandler();
        
        // Append only the created entry
        // const createdEntry = await response.json();
        // phonebookElement.appendChild(createPhonebookEntry(createdEntry))
    });
}

function createPhonebookEntry(entry) {
    const liElement = document.createElement('li');

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = 'Delete';

    deleteButtonElement.addEventListener('click', async () => {
        const entryId = entry._id;
        
        // Delete request
        await fetch(`${baseUrl}/${entryId}`, {
            method: 'DELETE'
        });

        // Refresh after delete
        loadEntriesButtonClickHandler();
    });

    liElement.textContent = `${entry.person}: ${entry.phone}`;
    liElement.appendChild(deleteButtonElement)

    return liElement;
}


async function loadEntriesButtonClickHandler() {
    const phonebookElement = document.getElementById('phonebook');

    const response = await fetch(baseUrl);
    const result = await response.json();
    const entries = Object.values(result);

    // Create list item entry
    const entryElements = entries.map(createPhonebookEntry);

    // Clear phonebook
    phonebookElement.innerHTML = '';

    // Attach entries to phonebook
    phonebookElement.append(...entryElements);
}

attachEvents();
