function solve() {
    // Get input elements
    const textInput = document.getElementById('text')
    const conventionInput = document.getElementById('naming-convention');

    // Get input values
    const textValue = textInput.value;
    const conventionValue = conventionInput.value;

    // Transform input text
    let result = '';
    switch (conventionValue) {
        case 'Camel Case':
            result = toCamelCase(textValue);
            break;
        case 'Pascal Case':
            result = toPascalCase(textValue);
            break;  
        default:
            result = 'Error!';
            break;
    }

    // Display result text
    const resultInput = document.getElementById('result');
    resultInput.textContent = result; 

    function toCamelCase(text) {
        const result = text
            .split(' ')
            .map((word, index) => index === 0 ? word.toLowerCase() : capitalize(word))
            .join('');

        return result;
    }

    function toPascalCase(text) {
        const result = text
            .split(' ')
            .map(capitalize)
            .join('');

        return result;
    }

    function capitalize(word) {
        const result = `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;

        return result;
    }
}
