/**
 * Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
 */
function sayHello(name,city,state){
    //variable to hold the name
    let newName = "";

    //put convert name to new name
    for(let i=0; i<name.length; i++){
        newName = newName.concat(`${name[i]} `)
    }

    return `Hello, ${newName.trim()}! Welcome to ${city}, ${state}!`
}
console.log(sayHello(["John","Smith"], 'Phoenix', 'Arizona'))