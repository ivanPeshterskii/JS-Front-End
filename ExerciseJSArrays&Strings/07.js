function solve(word, text) {
    let lowerWord = word.toLowerCase();
    let words = text.toLowerCase().split(' ');

    for (let currentWord of words) {
        if (currentWord === lowerWord) {
            console.log(lowerWord);
            return;
        }
    }

    console.log(`${lowerWord} not found!`);
}
solve('javascript', 'JavaScript is the best programming language');