function solve(input) {
    input
        .map(createHero)
        .sort(compareHeroes)
        .forEach(printHero);

    function createHero(row) {
        const [name, levelInput, itemsInput] = row.split(' / ');

        const hero = {
            name,
            level: Number(levelInput),
            items: itemsInput.split(', '),
        };

        return hero;
    }

    function compareHeroes(first, second) {
        return first.level - second.level;
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
