function solution(input) {
    let spell = input.shift();
    let command = input.shift();

    while (command !== "End") {
        if (command === "RemoveEven") {
            let newSpell = "";

            for (let i = 0; i < spell.length; i += 2) {
                newSpell += spell[i];
            }

            spell = newSpell;
            console.log(spell);
        } else {
            let parts = command.split("!");
            let action = parts[0];

            if (action === "TakePart") {
                let fromIndex = Number(parts[1]);
                let toIndex = Number(parts[2]);

                spell = spell.substring(fromIndex, toIndex);
                console.log(spell);
            } else if (action === "Reverse") {
                let substring = parts[1];

                if (spell.includes(substring)) {
                    let index = spell.indexOf(substring);

                    spell =
                        spell.slice(0, index) +
                        spell.slice(index + substring.length);

                    let reversed = substring.split("").reverse().join("");
                    spell += reversed;

                    console.log(spell);
                } else {
                    console.log("Error");
                }
            }
        }

        command = input.shift();
    }

    console.log(`The concealed spell is: ${spell}`);
}
solution(
    ["asAsl2adkda2mdaczsa",

        "RemoveEven",

        "TakePart!1!9",

        "Reverse!maz",

        "End"]
)