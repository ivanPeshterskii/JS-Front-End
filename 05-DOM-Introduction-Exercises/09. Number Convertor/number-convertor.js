function solve() {
    const inputNumber = Number(document.getElementById('input').value);

    const selectedNumericSystem = document.getElementById('selectMenuTo').value;

    const convertors = {
        binary: convertToBinary,
        hexadecimal: convertToHex,
    };

    const result = convertors[selectedNumericSystem](inputNumber);

    document.getElementById('result').value = result;

    function convertToBinary(number) {
        return number.toString(2);
    }

    function convertToHex(number) {
        return number.toString(16).toUpperCase();
    }
}
