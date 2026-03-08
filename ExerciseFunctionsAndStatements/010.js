function solve(n1, n2) {
   let first = findFactorial(n1);
   let second = findFactorial(n2);

   let result = first / second;

   console.log(result.toFixed(2));

    function findFactorial(number) {
        let result = 1;

        for(let i = 1; i <= number; i++) {
            result *= i;
        }

        return result;
    }
}
solve(5, 2);