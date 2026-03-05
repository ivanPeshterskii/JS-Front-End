function solve(a, b, operator) {

    let reuslt = 0;

    switch(operator) {
        case 'multiply': 
            result = a * b;
            break;

        case 'divide': 
            result = a / b;
            break;

        case 'add':
            result = a + b;
            break;

        case 'subtract':
            result = a - b;
            break;
    }   

    console.log(result);
}
solve(50,
13,
'subtract');