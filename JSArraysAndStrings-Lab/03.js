function solve(array) {

    let even = 0;
    let odd = 0;

    for(let number of array) {
        if(number % 2 === 0) {
            even += number
        } else {
            odd += number;
        }
    }

    console.log(even - odd);
    
}
solve([3,5,7,9]);