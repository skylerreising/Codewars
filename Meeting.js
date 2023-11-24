/**
 * John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.
 */
function meeting(s) {
    //make the whole string uppercase
    let noSemis = s.split(";");
    let caps = [];
    for(let i=0; i<noSemis.length; i++){
        if(noSemis[i].toUpperCase() || noSemis[i].toLowerCase()){
            caps.push(noSemis[i].toUpperCase());
        }else{
            continue;
        }
    }

    //separate first and last names and put last names first
    for(let i=0; i<caps.length; i++){
        caps[i] = caps[i].split(":").reverse();
    }
    //sort by alpha last name. If last name is the same, sort by first name
    caps.sort();
    //separate each name with a comma inside of parenthesis
    for(let i=0; i<caps.length; i++){
        caps[i] = caps[i].join(", ")
    }
    caps = caps.join(")(")
    caps = caps.concat(")")
    let finalCaps = "("+caps
    return finalCaps;
}
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))