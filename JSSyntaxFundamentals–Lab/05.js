function math(num1, num2, operator) {

    let numberOne = Number.parseInt(num1);
    let numberTwo = Number.parseInt(num2);

    let result = 0;

    switch (operator) {
        case '+':
            result = numberOne + numberTwo;
            console.log(result);
            break;

        case '-': 
            result = numberOne - numberTwo;
            console.log(result);
            break;

        case '*':
            result = numberOne * numberTwo;
            console.log(result);
            break;

        case '/':
            result = numberOne / numberTwo;
            console.log(result);
            break;
    }
}
math(5,6,'/');