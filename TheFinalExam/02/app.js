window.addEventListener("load", solve);

function solve(){
    const createBtn = document.getElementById('create-btn');

    const nameField = document.getElementById('name');
    const locationField = document.getElementById('location');
    const genderField = document.getElementById('gender');

    createBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if(!nameField.value || !locationField.value || !genderField.value) {
            return;
        }

        const ulElement = document.getElementById('preparing-list');

        const liElement = document.createElement('li');
        liElement.className = 'creating';

        const article = document.createElement('article');
        const h4Name = document.createElement('h4');
        const pLocation = document.createElement('p');
        const pGender = document.createElement('p');

        h4Name.textContent = nameField.value;
        pLocation.textContent = locationField.value;
        pGender.textContent = genderField.value;

        const editButton = document.createElement('button');
        editButton.className = 'action-btn edit';
        editButton.textContent = 'Edit';

        const doneButton = document.createElement('button');
        doneButton.className = 'action-btn done';
        doneButton.textContent = 'Done';

        article.appendChild(h4Name);
        article.appendChild(pLocation);
        article.appendChild(pGender);

        liElement.appendChild(article);

        liElement.appendChild(editButton);
        liElement.appendChild(doneButton);

        ulElement.appendChild(liElement);

        createBtn.disabled = true;

        nameField.value = '';
        locationField.value = '';
        genderField.value = '';

        editButton.addEventListener('click', () => {  
        

            liElement.remove();
            createBtn.disabled = false;

            nameField.value = h4Name.textContent;
            locationField.value = pLocation.textContent;
            genderField.value = pGender.textContent;
        });

        doneButton.addEventListener('click', () => {
            const newUl = document.getElementById('character-list');
            editButton.remove();
            doneButton.remove();
            createBtn.disabled = false;

            newUl.appendChild(liElement);
        });
    });
}
