function solve(sentence, wordToCount) {
    let count = 0;

    let sentenceArray = sentence.split(' ');

    for(let word of sentenceArray) {
        if(word === wordToCount) {
            count++;
        }
    }

    console.log(count);
    
}
solve('softuni is great place for learning new programming languages', 'softuni');