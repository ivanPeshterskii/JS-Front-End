function solve() {
    const info = document.querySelector('.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    let nextStopId = 'depot';
    let currentStopName = '';

    async function depart() {
        try {
            const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;
            const response = await fetch(url);

            if (response.ok == false) {
                throw new Error();
            }

            const data = await response.json();

            currentStopName = data.name;
            nextStopId = data.next;

            info.textContent = `Next stop ${currentStopName}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        } catch (error) {
            info.textContent = 'Error';
            departButton.disabled = true;
            arriveButton.disabled = true;
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();