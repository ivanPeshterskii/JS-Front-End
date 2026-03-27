function attachEvents() {
    const locationInput = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂'
    };

    submitBtn.addEventListener('click', getWeather);

    async function getWeather() {
        try {
            currentDiv.innerHTML = '<div class="label">Current conditions</div>';
            upcomingDiv.innerHTML = '<div class="label">Three-day forecast</div>';

            const locationName = locationInput.value;

            const locationsResponse = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            if (!locationsResponse.ok) {
                throw new Error();
            }

            const locations = await locationsResponse.json();
            const location = locations.find(x => x.name === locationName);

            if (!location) {
                throw new Error();
            }

            const code = location.code;

            const [todayResponse, upcomingResponse] = await Promise.all([
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`),
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
            ]);

            if (!todayResponse.ok || !upcomingResponse.ok) {
                throw new Error();
            }

            const todayData = await todayResponse.json();
            const upcomingData = await upcomingResponse.json();

            forecastDiv.style.display = 'block';

            const currentForecast = document.createElement('div');
            currentForecast.className = 'forecasts';

            const symbolSpan = document.createElement('span');
            symbolSpan.className = 'condition symbol';
            symbolSpan.textContent = symbols[todayData.forecast.condition];

            const conditionSpan = document.createElement('span');
            conditionSpan.className = 'condition';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'forecast-data';
            nameSpan.textContent = todayData.name;

            const tempSpan = document.createElement('span');
            tempSpan.className = 'forecast-data';
            tempSpan.textContent = `${todayData.forecast.low}°/${todayData.forecast.high}°`;

            const conditionTextSpan = document.createElement('span');
            conditionTextSpan.className = 'forecast-data';
            conditionTextSpan.textContent = todayData.forecast.condition;

            conditionSpan.appendChild(nameSpan);
            conditionSpan.appendChild(tempSpan);
            conditionSpan.appendChild(conditionTextSpan);

            currentForecast.appendChild(symbolSpan);
            currentForecast.appendChild(conditionSpan);

            currentDiv.appendChild(currentForecast);

            const upcomingForecast = document.createElement('div');
            upcomingForecast.className = 'forecast-info';

            upcomingData.forecast.forEach(day => {
                const upcomingSpan = document.createElement('span');
                upcomingSpan.className = 'upcoming';

                const daySymbol = document.createElement('span');
                daySymbol.className = 'symbol';
                daySymbol.textContent = symbols[day.condition];

                const dayTemp = document.createElement('span');
                dayTemp.className = 'forecast-data';
                dayTemp.textContent = `${day.low}°/${day.high}°`;

                const dayCondition = document.createElement('span');
                dayCondition.className = 'forecast-data';
                dayCondition.textContent = day.condition;

                upcomingSpan.appendChild(daySymbol);
                upcomingSpan.appendChild(dayTemp);
                upcomingSpan.appendChild(dayCondition);

                upcomingForecast.appendChild(upcomingSpan);
            });

            upcomingDiv.appendChild(upcomingForecast);

        } catch (error) {
            forecastDiv.style.display = 'block';
            forecastDiv.textContent = 'Error';
        }
    }
}

attachEvents();