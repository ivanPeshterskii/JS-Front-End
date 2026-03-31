const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

// Get profile template
const mainElement = document.getElementById('main');
const profileTemplate = document.querySelector('.profile');

// Hide profile template
profileTemplate.style.display = 'none';

async function lockedProfile() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const users = Object.values(result);

    const userProfileElements = users.map(createProfileElement);

    mainElement.append(...userProfileElements);
}

function createProfileElement(user) {
    // Clone Profile Template
    const newTemplate = profileTemplate.cloneNode(true);

    newTemplate.style.display = 'inline-block';

    newTemplate.querySelector('input[name=user1Username]').value = user.username;
    newTemplate.querySelector('input[name=user1Email]').value = user.email;
    newTemplate.querySelector('input[name=user1Age]').value = user.age;

    // attach event 
    const showMoreButton = newTemplate.querySelector('button');
    showMoreButton.addEventListener('click', showMoreButtonClickHandler);

    return newTemplate;
}

function showMoreButtonClickHandler(e) {
    const profileElement = e.currentTarget.parentElement;

    // TODO continue as usual (previous exercise);
}


