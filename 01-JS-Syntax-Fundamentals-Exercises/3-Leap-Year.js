function solve(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isDivisibleByHundred = year % 100 === 0;
    const isDivisibleByFrouHundred = year % 400 === 0;
    const isLeapYear = isDivisibleByFour && (!isDivisibleByHundred || isDivisibleByFrouHundred);

    if (isLeapYear) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

solve(800);
