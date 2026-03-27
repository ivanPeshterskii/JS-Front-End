async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commitsUl = document.getElementById('commits');

    commitsUl.innerHTML = '';

    try {
        const response = await fetch(
            `https://api.github.com/repos/${username}/${repo}/commits`
        );

        if (!response.ok) {
            throw new Error(`${response.status} (${response.statusText})`);
        }

        const data = await response.json();

        data.forEach(commit => {
            const li = document.createElement('li');
            li.textContent =
                `${commit.commit.author.name}: ${commit.commit.message}`;
            commitsUl.appendChild(li);
        });

    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `Error: ${error.message}`;
        commitsUl.appendChild(li);
    }
}