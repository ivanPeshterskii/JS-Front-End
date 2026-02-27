function solve(
    number,
    operation1,
    operation2,
    operation3,
    operation4,
    operation5,
) {
    let current = Number(number);
    const operations = operation1[0] + operation2[0] + operation3[0] + operation4[0] + operation5[0];

    for (let i = 0; i < operations.length; i++) {
        current = executeOperation(current, operations[i]);
        console.log(current);
    }

    function executeOperation(number, operation) {
        switch (operation) {
            case 'c':
                return number / 2;
            case 'd':
                return Math.sqrt(number);
            case 's':
                return number + 1;
            case 'b':
                return number * 3;
            case 'f':
                return number - number * 0.2
        }
    }
}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
