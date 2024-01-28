function solve(text, word) {
    // Split the text into words
    let censored = text.replace(word, replace(word));

    // Keep replacing until no more occurrences are found
    while (censored.includes(word)) {
        censored = censored.replace(word, replace(word));
    }

    function replace(word) {
        // Разделяне на думата на масив от символи
        let characters = word.split('');

        // Заменяне на всеки символ със '*'
        let starsArray = characters.map(function(char) {
            return '*';
        });

        // Съединяване на масива от символи обратно в дума
        let result = starsArray.join('');

        return result;
    }

    return censored;
}

// Examples
console.log(solve('A small sentence with some words', 'small'));
// Output: A ***** sentence with some words


