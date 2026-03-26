document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const [encodeTextarea, decodeTextarea] = document.querySelectorAll('textarea');
    const [encodeButton, decodeButton] = document.querySelectorAll('button');

    encodeButton.addEventListener('click', (event) => {
        event.preventDefault();

        let encodedMessage = '';

        for (const char of encodeTextarea.value) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        decodeTextarea.value = encodedMessage;
        encodeTextarea.value = '';
    });

    decodeButton.addEventListener('click', (event) => {
        event.preventDefault();

        let decodedMessage = '';

        for (const char of decodeTextarea.value) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        decodeTextarea.value = decodedMessage;
    });
}
