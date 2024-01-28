function solve(input) {
    let uniqueNames = {};

    input.forEach(element => {
        let keyValuePair = element.split(" ");
        let name = keyValuePair[0];
        let phoneNumber = keyValuePair[1];
        uniqueNames[name] = phoneNumber;
    });

    for (let key in uniqueNames) {
        console.log(`${key} -> ${uniqueNames[key]}`);
    }
}

solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
