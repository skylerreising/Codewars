/**
 * Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
 */
var greet = function(name) {
    let rightName = name.split("");
    rightName[0] = rightName[0].toUpperCase();

    //loop to lowercase the rest of the name
    for(let i=1; i<name.length; i++){
        rightName[i] = rightName[i].toLowerCase();
    }

    rightName = rightName.join("");

    return `Hello ${rightName}!`
};
console.log(greet('riley'))
console.log(greet('BILLY'))