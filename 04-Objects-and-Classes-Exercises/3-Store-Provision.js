function solve(currentProductsInput, orderedProductsInput) {
    // Convert input to object
    const currentProducts = getProductInfo(currentProductsInput);
    const orderedProducts = getProductInfo(orderedProductsInput);

    // Merge products as objects
    const store = addProductsToStore(currentProducts, orderedProducts);

    // Print result object
    printStore(store);

    function getProductInfo(input) {
        let result = {};

        for (let i = 0; i < input.length; i+=2) {
            const productName = input[i];
            const quantity = Number(input[i + 1]);

            result[productName] = quantity;
        }

        return result;
    }

    function addProductsToStore(store, products) {
        for (const productName in products) {
            if (!store[productName]) {
                store[productName] = 0;
            }

            store[productName] += products[productName];
        }

        return store;
    }

    function printStore(store) {
        for (const productName in store) {
            console.log(`${productName} -> ${store[productName]}`);
        }
    }
}

solve([
'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
[
'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
]
);
