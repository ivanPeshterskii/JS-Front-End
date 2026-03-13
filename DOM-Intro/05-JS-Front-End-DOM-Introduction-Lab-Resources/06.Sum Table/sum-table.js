function sumTable() {
    let price = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    let sumTdElement = price.pop();

    let sum = 0;

    for(tdElement of price) {
        let price = Number(tdElement.textContent);
        sum += price;
    }

    sumTdElement.textContent = sum;
}