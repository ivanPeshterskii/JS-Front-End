function deleteByEmail() {

    const email = document.getElementsByName('email')[0].value;
    const customers = document.querySelectorAll('#customers tbody tr td:nth-child(2)');
    const result = document.getElementById('result');

    customers.forEach(customer => {

        if(customer.textContent === email) {
            let row = customer.parentNode;
            row.parentNode.removeChild(row);
            result.textContent = 'Deleted.';
            return;
        }

        result.textContent = 'Not found.'
    });
}
