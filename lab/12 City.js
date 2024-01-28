function printObjectProperties(obj) {
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
printObjectProperties({
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
)