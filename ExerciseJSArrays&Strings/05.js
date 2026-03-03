function solve(wordsStr, text) {
  const words = wordsStr.split(', ');

  for (const word of words) {
    const template = '*'.repeat(word.length);
    text = text.replace(template, word);
  }

  return text;
}

console.log(
  solve(
    'great',
    'softuni is ***** place for learning new programming languages'
  )
);