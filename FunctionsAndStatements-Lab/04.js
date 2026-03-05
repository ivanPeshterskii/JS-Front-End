function solve(drink, quantity) {

    const priceOfCoffee = 1.50;
    const priceOfWater = 1.00;
    const priceOfCoke = 1.40;
    const priceOfSnacks = 2.00;

    let total = 0;

    switch(drink) {

        case "coffee": 
            total = quantity * priceOfCoffee;
            break;
        
        case "water": 
            total = priceOfWater * quantity;
            break;
        

        case "coke": 
            total = priceOfCoke * quantity;
            break;
        

        case "snacks": 
            total = priceOfSnacks * quantity;
            break;
    }

    console.log(total.toFixed(2));
}
solve("coffee", 2);