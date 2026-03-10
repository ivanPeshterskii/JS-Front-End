function solve(array) {
    let addresses = {};

    for(let data of array) {
        let[name, address] = data.split(':');
        addresses[name] = address;
    }

    let entries = Object.entries(addresses).sort((a, b) => a[0].localeCompare(b[0]));

    for(let[key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}

solve (
['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']
);