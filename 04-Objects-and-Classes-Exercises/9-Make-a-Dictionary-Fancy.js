function solve(input) {
    const definitions = input
        .map(JSON.parse)
        .reduce((definitions, definition) => ({ ...definitions, ...definition }), {})
    // .reduce((definitions, definition) => Object.assign(definitions, definition), {})

    Object.entries(definitions)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(entry => console.log(`Term: ${entry[0]} => Definition: ${entry[1]}`))
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);
