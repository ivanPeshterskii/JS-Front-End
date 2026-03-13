function solve(input) {
    const heroes = [];

    for (const row of input) {
        const hero = createHero(row)

        heroes.push(hero);
    }

    sortHeroes(heroes);

    heroes.forEach(printHero);

    function createHero(row) {
        const [name, levelInput, itemsInput] = row.split(' / ');

        const hero = {
            name,
            level: Number(levelInput),
            items: itemsInput.split(', '),
        };

        return hero;
    }

    function sortHeroes(heroes) {
        heroes.sort((a, b) => a.level - b.level);

        return heroes;
    }

    function printHero(hero) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
