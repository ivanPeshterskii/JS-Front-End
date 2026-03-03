function solve(array, count) {
    for (let i = 0; i < count; i++) {
        let current = array.shift();
        array.push(current);
    }

    const result = array.join(' ');
    console.log(result);
    
}
solve([51, 47, 32, 61, 21], 2);