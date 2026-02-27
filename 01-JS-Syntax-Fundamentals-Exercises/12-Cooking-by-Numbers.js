function solve(
    number,
    operation1,
    operation2,
    operation3,
    operation4,
    operation5,
) {
    let current = Number(number);

    current = executeOperation(current, operation1);
    console.log(current);

    current = executeOperation(current, operation2);
    console.log(current);

    current = executeOperation(current, operation3);
    console.log(current);

    current = executeOperation(current, operation4);
    console.log(current);

    current = executeOperation(current, operation5);
    console.log(current);

    function executeOperation(number, operation) {
        switch (operation) {
            case 'chop':
                return number / 2;
            case 'dice':
                return Math.sqrt(number);
            case 'spice':
                return number + 1;
            case 'bake':
                return number * 3;
            case 'fillet':
                return number - number * 0.2
        }
    }
}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
