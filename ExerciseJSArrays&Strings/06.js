function solve(input) {
    let words = input.split(' ');

    for(let word of words) {
        if(word.startsWith('#') && word.length > 1) {
            let special = word.substring(1);

            if(/^[A-Za-z]+$/.test(special)) {
                console.log(special);
            }
        }
    }
}
console.log(solve('Nowadays everyone uses # to tag a #special word in #socialMedia'));