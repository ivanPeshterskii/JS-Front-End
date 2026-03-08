function solve(n1, n2, n3) {

    const sumResult = sum(n1, n2);
    const resultOfDifference = subtract(sumResult, n3);

    console.log(resultOfDifference);
    

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
}
solve(23,6,10);