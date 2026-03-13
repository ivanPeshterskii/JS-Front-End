function solve(input) {
    // Input data
    const searchWords = input.shift().split(' ');
    const words = input;
    const occurences = {};

    for (const word of searchWords) {
        occurences[word] = 0;
    }

    // Count words
    for (const word of words) {
        if (occurences.hasOwnProperty(word)) {
            occurences[word]++;
        }
    }

    // Sort words
    const wordEntires = Object
        .entries(occurences)
        .sort((a, b) => b[1] - a[1])

    const sortedSearchWords = Object.fromEntries(wordEntires);
    
    // Print words
    for (const word in sortedSearchWords) {
        console.log(`${word} - ${sortedSearchWords[word]}`)
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);
