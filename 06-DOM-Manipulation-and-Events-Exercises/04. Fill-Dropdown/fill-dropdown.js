document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const submitButtonElement = document.querySelector('input[type=submit]');
    console.log(submitButtonElement);

    submitButtonElement.addEventListener('click', submitButtonClickHandler);

    function submitButtonClickHandler(e) {
        e.preventDefault();
        const selectElement = document.getElementById('menu');
        const inputTextElement = document.getElementById('newItemText');
        const inputValueElement = document.getElementById('newItemValue');

        const optionElement = createOptionElement(inputTextElement.value, inputValueElement.value);

        selectElement.appendChild(optionElement);

        // Input cleanup
        inputTextElement.value = '';
        inputValueElement.value = '';
    }

    function createOptionElement(text, value) {
        const optionElement = document.createElement('option');
        optionElement.value = value;
        optionElement.textContent = text;

        return optionElement;
    }
}
