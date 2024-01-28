function solve(string,searchWord){
    let words=string.split(" ");
    let  counter=0;
    for (let word of words){
        if (word === searchWord) {
            counter += 1;
        }

    }
    console.log(counter);
}
solve('softuni is great place for learning new programming languages',
    'softuni'
);