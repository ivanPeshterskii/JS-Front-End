function solve(currentProductsInput, orderedProductsInput) {
    // Convert input to object
    const currentProducts = getProductInfo(currentProductsInput);
    const orderedProducts = getProductInfo(orderedProductsInput);

    // Merge products as objects
    const store = addProductsToStore(currentProducts, orderedProducts);

    // Print result object
    printStore(store);

    function getProductInfo(input) {
        const entries = input
            .map((element, index, elements) => index % 2 === 0
                ? [element, Number(elements[index + 1])]
                : null
            )
            .filter(x => x);

        const result = Object.fromEntries(entries);

        return result;
    }

    function addProductsToStore(store, products) {
        const result = Object.keys(products)
            .reduce((acc, productName) => {
                if (!acc[productName]) {
                    acc[productName] = 0
                }

                acc[productName] += products[productName];

                return acc;
            }, store);

        return result;
    }

    function printStore(store) {
        Object.keys(store)
            .forEach(productName => console.log(`${productName} -> ${store[productName]}`))
    }
}

solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);

