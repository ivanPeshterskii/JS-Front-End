document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputDistanceElement = document.getElementById('inputDistance');
    const inputUnitsElement = document.getElementById('inputUnits');
    const outputUnitsElement = document.getElementById('outputUnits');
    const outputDistanceElement = document.getElementById('outputDistance');
    const convertButton = document.getElementById('convert');

    const unitsToMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    convertButton.addEventListener('click', () => {
        const inputDistance = Number(inputDistanceElement.value);
        const distanceInMeters = inputDistance * unitsToMeters[inputUnitsElement.value];

        outputDistanceElement.value = distanceInMeters / unitsToMeters[outputUnitsElement.value];
    });
}
