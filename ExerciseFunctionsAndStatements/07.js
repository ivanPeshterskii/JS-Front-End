function solve(n) {

    printMatrix(n);

    function printMatrix(size) {
        for(let rows = 0; rows < size; rows++) {
            let row = '';

            for(let cols = 0; cols < size; cols++) {
                row += size + ' ';
            }

            console.log(row.trim());
        }
    }
}
solve(3);