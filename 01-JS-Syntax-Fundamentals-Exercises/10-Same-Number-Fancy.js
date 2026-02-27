function solve(number) {
    const numberInput = number.toString();
    const firstCharacter = numberInput[0];

    let areEqual = true;
    let sum = Number(firstCharacter);

    for (let i = 1; i < numberInput.length; i++) {
        if (firstCharacter != numberInput[i]) {
            areEqual = false;
        }

        sum += Number(numberInput[i]);
    }

    console.log(areEqual);
    console.log(sum);
}

solve(2222222);
solve(1234);
