function toggle() {
    // Get dev extra element and button element
    const extraTextElement = document.getElementById('extra');
    const buttonElement = document.querySelector('#accordion .button');

    // Toggle extra div and button text
    const isExpanded = extraTextElement.style.display === 'block'

    if (isExpanded) {
        extraTextElement.style.display = 'none';
        buttonElement.textContent = 'More';
    } else {
        extraTextElement.style.display = 'block'
        buttonElement.textContent = 'Less';
    }
}
