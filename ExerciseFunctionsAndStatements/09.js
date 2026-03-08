function solve(percents) {

    print(percents);

    function print(num) {
        let percentCount = num / 10;
        let dotsCount = 10 - percentCount;

        let bar = '[' + '%'.repeat(percentCount) + '.'.repeat(dotsCount) + ']';

        if (num === 100) {
            console.log("100% Complete!");
            console.log(bar);
        } else {
            console.log(`${num}% ${bar}`);
            console.log("Still loading...");
        }
    }
}
solve(30);