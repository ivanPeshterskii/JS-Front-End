function solve(fruitType, weightInGrams, pricePerKg) {
    const weigthInKg = weightInGrams / 1000;
    const totalPrice = pricePerKg * weigthInKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${fruitType}.`);
}

solve('orange', 2500, 1.80);
