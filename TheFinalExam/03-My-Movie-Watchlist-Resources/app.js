const baseUrl = 'http://localhost:3030/jsonstore/movies';

const loadMoviesBtn = document.getElementById('load-movies');
const addMovieBtn = document.getElementById('add-movie');
const editMovieBtn = document.getElementById('edit-movie');

const mainDiv = document.getElementById('movie-list');

const movieTitleField = document.getElementById('title');
const movieDirectorField = document.getElementById('director');
const movieYearField = document.getElementById('year');

let idToEdit = null;

loadMoviesBtn.addEventListener('click', loadMovies);
addMovieBtn.addEventListener('click', addMovie);
editMovieBtn.addEventListener('click', editMovie);

editMovieBtn.disabled = true;

async function loadMovies() {
    mainDiv.innerHTML = '';

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach(d => {
        const divFirstCtr = document.createElement('div');
        divFirstCtr.className = 'movie';

        const divSecondCtr = document.createElement('div');
        divSecondCtr.className = 'content';

        const pTitle = document.createElement('p');
        const pDirector = document.createElement('p');
        const pYear = document.createElement('p');

        pTitle.textContent = d.title;
        pDirector.textContent = d.director;
        pYear.textContent = d.year;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        const changeButton = document.createElement('button');
        changeButton.className = 'change-btn';
        changeButton.textContent = 'Change';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';

        buttonsContainer.appendChild(changeButton);
        buttonsContainer.appendChild(deleteButton);

        divSecondCtr.appendChild(pTitle);
        divSecondCtr.appendChild(pDirector);
        divSecondCtr.appendChild(pYear);

        divFirstCtr.appendChild(divSecondCtr);
        divFirstCtr.appendChild(buttonsContainer);

        mainDiv.appendChild(divFirstCtr);

        deleteButton.addEventListener('click', async () => {
            await fetch(`${baseUrl}/${d._id}`, {
                method: 'DELETE'
            });

            await loadMovies();
        });

        changeButton.addEventListener('click', () => {
            movieTitleField.value = d.title;
            movieDirectorField.value = d.director;
            movieYearField.value = d.year;

            idToEdit = d._id;

            divFirstCtr.remove();

            addMovieBtn.disabled = true;
            editMovieBtn.disabled = false;
        });
    });
}

async function addMovie(e) {
    e.preventDefault();

    const title = movieTitleField.value;
    const director = movieDirectorField.value;
    const year = movieYearField.value;

    if (!title || !director || !year) {
        return;
    }

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            director,
            year
        })
    });

    clearInputs();
    await loadMovies();
}

async function editMovie(e) {
    e.preventDefault();

    const title = movieTitleField.value;
    const director = movieDirectorField.value;
    const year = movieYearField.value;

    if (!title || !director || !year || !idToEdit) {
        return;
    }

    await fetch(`${baseUrl}/${idToEdit}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            director,
            year
        })
    });

    clearInputs();
    idToEdit = null;

    editMovieBtn.disabled = true;
    addMovieBtn.disabled = false;

    await loadMovies();
}

function clearInputs() {
    movieTitleField.value = '';
    movieDirectorField.value = '';
    movieYearField.value = '';
}