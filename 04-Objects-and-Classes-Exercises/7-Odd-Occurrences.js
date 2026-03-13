function solve(input) {
    const words = input.split(' ').map(word => word.toLowerCase());

    const occurrences = {};

    for (const word of words) {
        if (!occurrences[word]) {
            occurrences[word] = 0;
        }

        occurrences[word]++
    }

    // filter only odd occurrences
    const result = Object.entries(occurrences)
        .filter(wordEntry => wordEntry[1] % 2 !== 0)
        .sort((a, b) => b[1] - a[1])
        .map(wordEntry => wordEntry[0])
        .join(' ');

    console.log(result);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
