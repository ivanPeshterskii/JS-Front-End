function solve() {
    // Get columns with checked attribute
    const columns = Array.from(document.querySelectorAll('table thead input'))
        .reduce((result, columnInput) => {
            const columnName = columnInput.getAttribute('name');
            const selected = columnInput.checked;

            result[columnName] = selected;

            return result;
        }, {});

    const columnEntries = Object.entries(columns);

    // Extract data
    const rowElements = document.querySelectorAll('table tbody tr');

    const result = [];
    for (const row of rowElements) {
        const resultRow = {};

        Array.from(row.children)
            .forEach((cell, index) => {
                const [columnName, isSelected] = columnEntries[index];
                if (isSelected) {
                    resultRow[columnName] = cell.textContent;
                }
            });

        result.push(resultRow);
    }

    document.getElementById('output').append(JSON.stringify(result));
}
