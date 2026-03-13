function solve(input) {
    const parking = {};

    // register cars
    for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        if (direction === 'IN') {
            parking[carNumber] = true;
        } else if (direction === 'OUT') {
            delete parking[carNumber];
        }
    }

    // sort remaining cars
    const sortedParking = Object.entries(parking)
        .sort((a, b) => a[0].localeCompare(b[0]))

    // print remaining cars
    for (const entry of sortedParking) {
        console.log(entry[0]);
    }
    
    if (sortedParking.length === 0) {
        console.log('Parking Lot is Empty');
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
