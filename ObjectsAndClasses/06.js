function solve(arr) {
    let meetings = {};

    for(let meet of arr) {
        let[day, name] = meet.split(' ');

        if(day in meetings) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    let entries = Object.entries(meetings);
    
    for(let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
    
}
solve(
[
    'Friday Bob',

    'Saturday Ted',

    'Monday Bill',

    'Monday John',

    'Wednesday George'
]
)