function revers(n, input){
    let reversArray=[];
    for (let i = 0; i<n;i++){
        reversArray.unshift(input[i]);
    }
    console.log(reversArray.join(" "));
}
revers(3, [10, 20, 30, 40, 50]);