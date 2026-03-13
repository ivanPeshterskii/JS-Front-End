function solve(input) {
    const parking = input
        .map(row => row.split(', '))
        .reduce((acc, [direction, number]) => ({ ...acc, [number]: direction === 'IN' }), {})

    Object.entries(parking)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .filter(([_, isActive]) => isActive)
        .forEach(([number]) => console.log(number));
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
