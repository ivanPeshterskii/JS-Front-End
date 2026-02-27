function solve(number, ...operations) {
    let current = Number(number);

    for (const operation of operations) {
        current = executeOperation(current, operation);
        console.log(current);
    }

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
