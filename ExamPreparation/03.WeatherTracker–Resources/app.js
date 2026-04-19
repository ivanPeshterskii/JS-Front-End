const url = 'http://localhost:3030/jsonstore/tasks';

const loadHistoryButton = document.getElementById('load-history');
const editWeatherButton = document.getElementById('edit-weather');

const divElement = document.getElementById('list');

loadHistoryButton.addEventListener('click', loadHistory);

async function loadHistory() {

    divElement.innerHTML = '';

    const response = await fetch(url);
    const data = await response.json();
    const formatedData = Object.values(data);

    formatedData.forEach(f => {

        editWeatherButton.disabled = true;

        const divContainer = document.createElement('div');
        divContainer.className = 'container';

        const divButtonsContainer = document.createElement('div');
        divButtonsContainer.className = 'buttons-container';

        const hCity = document.createElement('h2');
        const hDate = document.createElement('h2');
        const hTemp = document.createElement('h3');
        hTemp.id = 'celsius';

        const changeButton = document.createElement('button');
        changeButton.textContent = 'Change';
        changeButton.className = 'change-btn';

        const deleteButon = document.createElement('button');
        deleteButon.textContent = 'Delete';
        deleteButon.className = 'delete-btn';

        hCity.textContent = f.location;
        hDate.textContent = f.date;
        hTemp.textContent = f.temperature;


        divContainer.appendChild(hCity);
        divContainer.appendChild(hDate);
        divContainer.appendChild(hTemp);
        divContainer.appendChild(divButtonsContainer);

        divButtonsContainer.appendChild(changeButton);
        divButtonsContainer.appendChild(deleteButon);

        divElement.appendChild(divContainer);

        deleteButton.addEventListener('click', deleteFunction);

        async function deleteFunction() {
            await fetch(`${url}/${f._id}`, {
                method: 'DELETE',
            });
        }


    });

}

