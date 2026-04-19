function solution(input) {
    const count = Number(input.shift());
    const astronauts = {};

    for (let i = 0; i < count; i++) {
        const [name, oxygenLevel, energyReserves] = input.shift().split(' ');

        astronauts[name] = {
            oxygenLevel: Number(oxygenLevel),
            energyReserves: Number(energyReserves)
        };
    }

    let line = input.shift();

    while (line !== 'End') {
        const [command, name, value] = line.split(' - ');
        const amount = Number(value);

        switch (command) {
            case 'Explore':
                explore(name, amount);
                break;
            case 'Refuel':
                refuel(name, amount);
                break;
            case 'Breathe':
                breathe(name, amount);
                break;
        }

        line = input.shift();
    }

    for (const name in astronauts) {
        console.log(
            `Astronaut: ${name}, Oxygen: ${astronauts[name].oxygenLevel}, Energy: ${astronauts[name].energyReserves}`
        );
    }

    function explore(name, energyNeeded) {
        if (astronauts[name].energyReserves >= energyNeeded) {
            astronauts[name].energyReserves -= energyNeeded;
            console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energyReserves} energy!`);
        } else {
            console.log(`${name} does not have enough energy to explore!`);
        }
    }

    function refuel(name, amount) {
        const currentEnergy = astronauts[name].energyReserves;
        const maxEnergy = 200;
        const recovered = Math.min(amount, maxEnergy - currentEnergy);

        astronauts[name].energyReserves += recovered;
        console.log(`${name} refueled their energy by ${recovered}!`);
    }

    function breathe(name, amount) {
        const currentOxygen = astronauts[name].oxygenLevel;
        const maxOxygen = 100;
        const recovered = Math.min(amount, maxOxygen - currentOxygen);

        astronauts[name].oxygenLevel += recovered;
        console.log(`${name} took a breath and recovered ${recovered} oxygen!`);
    }
}

solution([
    '3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End'
]);