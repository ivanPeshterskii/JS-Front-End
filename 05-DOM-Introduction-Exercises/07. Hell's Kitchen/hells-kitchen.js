function solve() {
    // Get inputs
    const input = document.querySelector('#inputs textarea').value;
    const data = JSON.parse(input);
    const restaurants = {};

    // Extract restaurant info
    for (const row of data) {
        const [restaurantName, workersInfo] = row.split(' - ');
        const workersEntries = workersInfo.split(', ').map(info => {
            const [name, salaryInfo] = info.split(' ');

            return [
                name,
                Number(salaryInfo),
            ]
        });

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {};
        }

        Object.assign(restaurants[restaurantName], Object.fromEntries(workersEntries));
    }

    // Find best restaurant
    let maxAverageSalary = Number.MIN_SAFE_INTEGER;
    let bestRestaurant = null;
    for (const restaurant in restaurants) {
        const salaries = Object.values(restaurants[restaurant]);
        const averageSalary = salaries.reduce((acc, salary) => acc + salary, 0) / salaries.length;

        if (averageSalary > maxAverageSalary) {
            maxAverageSalary = averageSalary;
            bestRestaurant = restaurant;
        }
    }

    // Calculate average salary
    const highestSalary = Math.max(...Object.values(restaurants[bestRestaurant]));

    // Ouput
    const bestRestaurantOutput = document.getElementById('bestRestaurant');
    bestRestaurantOutput.querySelector('p').textContent = `Name: ${bestRestaurant} Average Salary: ${maxAverageSalary.toFixed(2)} Best Salary: ${highestSalary.toFixed(2)}`

    const workersOutput = Object.entries(restaurants[bestRestaurant])
        .sort((a, b) => b[1] - a[1])
        .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
        .join(' ');

    document.querySelector('#workers p').textContent = workersOutput;
}
