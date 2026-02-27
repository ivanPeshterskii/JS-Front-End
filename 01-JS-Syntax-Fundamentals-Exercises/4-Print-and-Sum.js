function solve(start, end) {
    let sum = 0;
    let output = '';

    // Print all numbers in range and calculate the sum
    for (let i = start; i <= end; i++) {
        sum += i;
        output += i + ' ';
    }

    // Print the result
    console.log(output.trim());
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
