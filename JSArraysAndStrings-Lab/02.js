function solve(n, array) {
    let result = array.slice(0, n).reverse();

    console.log(result.join(' '));
}
solve(2, [66, 43, 75, 89, 47]);