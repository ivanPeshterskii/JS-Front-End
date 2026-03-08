function solve(numbers) {

    isPolindrome(numbers);

    function isPolindrome(array) {
        for(let num of array) {

            let string = num.toString();
            let resversed = string.split('').reverse().join('');

            if(string === resversed) {
                console.log('true');
            } else {
                console.log('false');
            }
        }
    }
}
solve([123,323,421,121]);