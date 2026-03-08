function solve(firstChar, secondChar) {
    
    const lower = getLowerCharacter(firstChar, secondChar);
    const higher = getHigherCharacter(firstChar, secondChar);
    const range = getRange(lower, higher);

    const result = print(range);
    console.log(result);


    function getLowerCharacter(first, second) {
        return first < second ? first : second;
    }

    function getHigherCharacter(first, second) {
        return first > second ? first : second;
    }

    function getRange(lower, higher) {
        let range = [];
        let lowerCharCode = lower.charCodeAt(0);
        let higherCharCode = higher.charCodeAt(0);

        for(let i = lowerCharCode + 1; i < higherCharCode; i++) {

            let character = String.fromCharCode(i);
            range.push(character);
        }
        return range;
    }

    function print(range) {
        const result = range.join(' ');

        return result;
    }
}
solve('a', 'd');