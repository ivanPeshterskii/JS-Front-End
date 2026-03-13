function solve(input) {
    // Parse input into objects
    const towns = input.map(parseTown);

    // Print objects
    towns.forEach(printTown);

    function parseTown(row = '') {
        const [town, latitudeInput, longitudeInput] = row.split(' | ');

        const result = {
            town,
            latitude: Number(latitudeInput),
            longitude: Number(longitudeInput),
        };

        return result;
    }

    function printTown(town = {}) {
        const result = {
            ...town,
            latitude: town.latitude.toFixed(2),
            longitude: town.longitude.toFixed(2),
        };

        console.log(result);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
