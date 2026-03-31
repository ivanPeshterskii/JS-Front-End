const baseUrl = 'http://localhost:3030/jsonstore/messenger';

function attachEvents() {
    const refreshButton = document.getElementById('refresh');
    const sendButton = document.getElementById('submit');
    const textArea = document.getElementById('messages');

    refreshButton.addEventListener('click', async () => {
        // Get all messages
        const response = await fetch(baseUrl);
        const result = await response.json();

        // Transform data
        const displayMessages = Object.values(result)
            .map(message => `${message.author}: ${message.content}`)
            .join('\n');

        // Show messages in text area
        textArea.value = displayMessages;
    });

    sendButton.addEventListener('click', async () => {
        // Get name and message from inputs
        const authorInputElement = document.querySelector('input[name=author]');
        const contentInputElement = document.querySelector('input[name=content]');

        const author = authorInputElement.value;
        const content = contentInputElement.value;

        // Create post request to rest api
        const body = { author, content };

        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        // Clean up input fields
        authorInputElement.value = '';
        contentInputElement.value = '';
    });
}

attachEvents();
