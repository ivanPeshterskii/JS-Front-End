function solve(text) {
    let words = text.match(/[A-Z][a-z]*/g);
    console.log(words.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');