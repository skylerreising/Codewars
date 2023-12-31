/**
 * A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).
 */
function stockList(listOfArt, listOfCat){
    //Control for empty list of books or categories
    if(listOfArt.length === 0 || listOfCat === 0){
        return "";
    }
    
    //declare result string
    let resultStr = "";

    //loop through list of books and if the first char in the string is the same as the character in the list of categories, add the number to a count, then push the final letter and count to a result string
    for(let i=0; i<listOfCat.length; i++){
        let count = 0;
        for(let j=0; j<listOfArt.length; j++){
            if(listOfArt[j][0] === listOfCat[i]){
                //pull the number out of the string and add it to the count
                let splitStr = listOfArt[j].split(" ")
                count += Number(splitStr[1])
            }
        }
        if(i !== listOfCat.length-1){
            resultStr = resultStr.concat(`(${listOfCat[i]} : ${count}) - `)
        }else{
            resultStr = resultStr.concat(`(${listOfCat[i]} : ${count})`)
        }
    }
    return resultStr
  }
console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));// "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"