document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const table = document.querySelector('table');
    const buttons = document.querySelectorAll('button');
    const checkBtn = buttons[0];
    const clearBtn = buttons[1];
    const inputs = document.querySelectorAll('table input');
    const message = document.querySelector('#check p');

    checkBtn.addEventListener('click', checkSudomu);
    clearBtn.addEventListener('click', clearSudomu);

    function checkSudomu() {
        let matrix = [];

        for (let i = 0; i < inputs.length; i += 3) {
            matrix.push([
                inputs[i].value,
                inputs[i + 1].value,
                inputs[i + 2].value
            ]);
        }

        let isSolved = true;

        // Проверка на редовете
        for (let row of matrix) {
            let unique = new Set(row);

            if (row.includes('') || unique.size !== 3) {
                isSolved = false;
            }
        }

        // Проверка на колоните
        for (let col = 0; col < 3; col++) {
            let currentColumn = [
                matrix[0][col],
                matrix[1][col],
                matrix[2][col]
            ];

            let unique = new Set(currentColumn);

            if (currentColumn.includes('') || unique.size !== 3) {
                isSolved = false;
            }
        }

        if (isSolved) {
            table.style.border = '2px solid green';
            message.textContent = 'Success!';
        } else {
            table.style.border = '2px solid red';
            message.textContent = 'Keep trying...';
        }
    }

    function clearSudomu() {
        inputs.forEach(input => input.value = '');
        table.style.border = '';
        message.textContent = '';
    }
}