function solve(name, lastName, hairColor) {
    let personObject = {
        name,
        lastName,
        hairColor
    };

    let resultJSON = JSON.stringify(personObject);
    console.log(resultJSON);
}
solve('George', 'Jones','Brown');