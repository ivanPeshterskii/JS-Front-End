function solve(number) {
    const numberInput = number.toString();
    const firstCharacter = numberInput[0];

    let areEqual = true;
    let sum = 0;

    for (let i = 0; i < numberInput.length; i++) {
        if (firstCharacter != numberInput[i]) {
            areEqual = false;
        }

        sum += Number(numberInput[i]);
        // sum += parseInt(numberInput[i]);
        // sum += +numberInput[i]
    }

    console.log(areEqual);
    console.log(sum);
}

solve(2222222);
solve(1234);
