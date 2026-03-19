document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const buttons = document.querySelectorAll('.product button');
    const checkoutBtn = document.querySelector('.checkout');
    const textarea = document.querySelector('textarea');

    let products = [];
    let totalPrice = 0;

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const product = e.target.parentElement.parentElement;
            const name = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);

            products.push(name);
            totalPrice += price;

            textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        });
    });

    checkoutBtn.addEventListener('click', () => {
        const uniqueProducts = [...new Set(products)];

        textarea.value += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

        document.querySelectorAll('button').forEach(b => b.disabled = true);
    });
}
