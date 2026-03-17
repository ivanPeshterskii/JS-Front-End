function subtract() {
    // Get input references
    const firstInput = document.getElementById('firstNumber');
    const secondInput = document.getElementById('secondNumber');

    // Extract numbers from inputs
    const firstNumber = Number(firstInput.value);
    const secondNumber = Number(secondInput.value);

    // Calculate result
    const result = firstNumber - secondNumber;

    // Display result in DOM
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}
