function solve(input) {
    const occurrences = input
        .split(' ')
        .map(word => word.toLowerCase())
        .reduce(
            (acc, word) => acc[word]
                ? { ...acc, [word]: acc[word] + 1 }
                : { ...acc, [word]: 1 },
            {}
        );

    // filter only odd occurrences
    const result = Object.entries(occurrences)
        .filter(wordEntry => wordEntry[1] % 2 !== 0)
        .sort((a, b) => b[1] - a[1])
        .map(wordEntry => wordEntry[0])
        .join(' ');

    console.log(result);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
