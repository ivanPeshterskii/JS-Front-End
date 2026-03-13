function solve(input) {
    // Parse input into objects
    const towns = input.map(row => parseTown(row));

    // Print objects
    towns.forEach(town => printTown(town));

    function parseTown(row = '') {
        const cells = row.split(' | ');

        const town = {
            town: cells[0],
            latitude: Number(cells[1]),
            longitude: Number(cells[2]),
        };

        return town;
    }

    function printTown(town = {}) {
        const printableTown = {
            town: town.town,
            latitude: town.latitude.toFixed(2),
            longitude: town.longitude.toFixed(2),
        };

        console.log(printableTown);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
