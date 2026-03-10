function solve(string) {
    let result = JSON.parse(string);
    let object = Object.entries(result);

    for(let[key, value] of object) {
        console.log(`${key}: ${value}`);
    }
}
solve( 
    '{"name": "George", "age": 40, "town": "Sofia"}'
);