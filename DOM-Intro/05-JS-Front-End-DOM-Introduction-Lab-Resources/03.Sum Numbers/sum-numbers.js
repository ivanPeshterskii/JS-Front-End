function calc() {
    let numOne = document.getElementById('num1');
    let numTwo = document.getElementById('num2');
    let sumElement = document.getElementById('sum');

    let a = Number(numOne.value);
    let b = Number(numTwo.value);

    let sum = a + b;
    sumElement.value = sum;

}