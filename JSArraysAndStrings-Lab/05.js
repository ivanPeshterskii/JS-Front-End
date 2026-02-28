function solve(sentence, word) {
    let starTemplate = '*'.repeat(word.length);

    sentence = sentence.replaceAll(word, starTemplate);

    console.log(sentence);
    
}
solve('A small sentence with some words', 'with'); 