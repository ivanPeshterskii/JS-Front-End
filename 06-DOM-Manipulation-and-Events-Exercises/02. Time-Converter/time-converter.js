document.addEventListener('DOMContentLoaded', solve);

function solve() {
    // Take all forms
    const formElements = document.querySelectorAll('form');

    // Add event to all forms
    formElements.forEach(form => form.addEventListener('submit', formSubmitHandler))

    function formSubmitHandler(e) {
        // Stop default submit behaviour
        e.preventDefault();

        const currentFormElement = e.currentTarget;
        const inputElement = currentFormElement.querySelector('input[type=number]');

        const inputValue = inputElement.value;
        const inputValueType = currentFormElement.id;

        const timeResults = calculateTime(inputValue, inputValueType);

        for (const type in timeResults) {
            const inputElement = document.getElementById(`${type}-input`);

            inputElement.value = timeResults[type].toFixed(2);
        }
    }

    function calculateTime(value, type) {
        let seconds;

        switch (type) {
            case 'days':
                seconds = value * 24 * 60 * 60;
                break;
            case 'hours':
                seconds = value * 60 * 60;
                break;
            case 'minutes':
                seconds = value * 60;
                break;
            case 'seconds':
                seconds = value;
                break;
            default:
                throw new Error('Invalid type');
        }

        return {
            days: seconds / (24 * 60 * 60),
            hours: seconds / (60 * 60),
            minutes: seconds / 60,
            seconds: seconds,
        };
    }
}
