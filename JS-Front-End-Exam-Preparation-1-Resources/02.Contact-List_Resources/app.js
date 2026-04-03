window.addEventListener("load", solve);

function solve() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const categoryInput = document.getElementById('category');
    const addBtn = document.getElementById('add-btn');

    const checkList = document.getElementById('check-list');
    const contactList = document.getElementById('contact-list');

    addBtn.addEventListener('click', function () {
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const category = categoryInput.value.trim();

        if (!name || !phone || !category) {
            return;
        }

        const li = document.createElement('li');
        const article = document.createElement('article');

        const pName = document.createElement('p');
        pName.textContent = `name:${name}`;

        const pPhone = document.createElement('p');
        pPhone.textContent = `phone:${phone}`;

        const pCategory = document.createElement('p');
        pCategory.textContent = `category:${category}`;

        article.appendChild(pName);
        article.appendChild(pPhone);
        article.appendChild(pCategory);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';

        const saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(saveBtn);

        li.appendChild(article);
        li.appendChild(buttonsDiv);

        checkList.appendChild(li);

        nameInput.value = '';
        phoneInput.value = '';
        categoryInput.value = '';

        editBtn.addEventListener('click', function () {
            nameInput.value = name;
            phoneInput.value = phone;
            categoryInput.value = category;

            checkList.removeChild(li);
        });

        saveBtn.addEventListener('click', function () {
            checkList.removeChild(li);

            li.removeChild(buttonsDiv);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'del-btn';

            li.appendChild(deleteBtn);
            contactList.appendChild(li);

            deleteBtn.addEventListener('click', function () {
                contactList.removeChild(li);
            });
        });
    });
}