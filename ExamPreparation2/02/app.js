window.addEventListener("load", solve);

function solve() {
    const eventField = document.getElementById('event');
    const nodeField = document.getElementById('note');
    const dateField = document.getElementById('date');

    const saveBtn = document.getElementById('save');

    saveBtn.addEventListener('click', () => {

        if (!eventField || !nodeField || !dateField) {
            return;
        }

        const eventValue = eventField.value;
        const nodeValue = nodeField.value;
        const dateValue = dateField.value;

        const listItem = document.getElementById('upcoming-list');
        const liElement = document.createElement('li');
        const divElement = document.createElement('div');
        const articleElement = document.createElement('article');
        const pName = document.createElement('p');
        const pNote = document.createElement('p');
        const pDate = document.createElement('p');
        const seconddDivElement = document.createElement('div');
        const editBtn = document.createElement('button');
        const doneBtn = document.createElement('button');

        liElement.className = 'event-item';
        divElement.className = 'event-container';
        seconddDivElement.className = 'buttons';
        editBtn.className = 'btn edit';
        doneBtn.className = 'btn done';

        pName.textContent = `Name: ${eventValue}`;
        pNote.textContent = `Note: ${nodeValue}`;
        pDate.textContent = `Date: ${dateValue}`;

        editBtn.textContent = 'Edit';
        doneBtn.textContent = 'Done';

        seconddDivElement.append(
            editBtn,
            doneBtn
        );

        articleElement.append(
            pName,
            pNote,
            pDate
        );

        divElement.append(
            articleElement,
            seconddDivElement
        );

        liElement.append(
            divElement
        );

        listItem.appendChild(liElement);

        eventField.value = '';
        nodeField.value = '';
        dateField.value = '';

        editBtn.addEventListener('click', () => {
            listItem.innerHTML = '';

            eventField.value = eventValue;
            nodeField.value = nodeValue;
            dateField.value = dateValue;

        });

        doneBtn.addEventListener("click", () => {
            const ul = document.getElementById('events-list');
            const div = document.getElementsByClassName('event-container')[0];

            div.remove();

            editBtn.remove();
            doneBtn.remove();

            liElement.append(
                articleElement
            );

            articleElement.append(
                pName,
                pNote,
                pDate
            );

            ul.appendChild(liElement);

            const deleteBtn = document.getElementsByClassName('btn delete')[0];

            deleteBtn.addEventListener('click', () => {
                ul.innerHTML = '';
            });
        });

    });
}