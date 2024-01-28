function solve(product, quontity) {
    if(product==="coffee"){
        console.log((quontity*1.5).toFixed(2))
    }
    if(product==="water"){
        console.log((quontity*1.0).toFixed(2))
    }
    if(product==="coke"){
        console.log((quontity*1.4).toFixed(2))
    }
    if(product==="snacks"){
        console.log((quontity*2.0).toFixed(2))
    }
}
solve("water", 5);