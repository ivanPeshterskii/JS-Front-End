function solve(input) {
    let contacts = {};

    for(let string of input) {
        let[name, phoneNumber] = string.split(' ');

        contacts[name] = phoneNumber;
    }

    let entries = Object.entries(contacts);

    for(let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
solve(
[
    'Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'
]
)