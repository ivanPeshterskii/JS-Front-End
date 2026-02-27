function solve(number) {
    let input = number;
    let sum = 0;

    while (input > 0) {
        let remainer = input % 10;

        sum += remainer;

        input = Math.trunc(input / 10);
    }

    console.log(sum);
}

solve(245678);
