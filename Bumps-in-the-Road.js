/**
 * Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
 */
function bump(x){
    //loop through string and count bumps
    let bumps = 0;
    for(let i=0; i<x.length; i++){
        if(x.charAt(i)==="n"){
            bumps++;
        }
    }
    //if bumps are less than or equal to 15, return "Woohoo!" else "Car Dead"
    if(bumps<=15){
        return "Woohoo!";
    }else{
        return "Car Dead";
    }
}
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));