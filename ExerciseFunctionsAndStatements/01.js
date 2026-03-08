function solve(n1, n2, n3) {

    const result = findMin(n1, n2, n3);

    console.log(result);
   
    function findMin(first, second, third) {
        let min = Number.MAX_SAFE_INTEGER;

        if(first < min) {
            min = first;
        }

        if(second < min) {
            min = second;
        }

        if(third < min) {
            min = third;
        }

        return min;
    }
}
solve(70, 50, -300);