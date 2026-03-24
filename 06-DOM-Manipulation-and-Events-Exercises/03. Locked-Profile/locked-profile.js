document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const showMoreButtonElements = document.querySelectorAll('.profile button');
    const lockRadioButtons = document.querySelectorAll('.radio-group input[type=radio]:first-of-type')

    showMoreButtonElements.forEach(el => el.addEventListener('click', showHiddenFields))

    lockRadioButtons.forEach(el => el.addEventListener('click', (e) => {
        const profileElement = e.currentTarget.closest('.profile');

        const buttonElement = profileElement.querySelector('button');
        const hiddenFields = profileElement.querySelector('.hidden-fields');

        hiddenFields.style.display = 'none';
        buttonElement.textContent = 'Show more';
    }));

    function showHiddenFields(e) {
        // Taka profile (parent) element
        const buttonElement = e.currentTarget;
        const profileElement = buttonElement.parentElement;

        // Check if profile is locked
        const lockRadioElement = profileElement.querySelector('.radio-group input[type=radio]');

        if (lockRadioElement.checked) {
            return;
        }

        // Show hidden fields
        const hiddenFields = profileElement.querySelector('.hidden-fields');

        if (buttonElement.textContent === 'Show more') {
            hiddenFields.style.display = 'block';
            buttonElement.textContent = 'Show less';
        } else {
            hiddenFields.style.display = 'none';
            buttonElement.textContent = 'Show more';
        }

    }
}
