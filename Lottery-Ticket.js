/**
 * Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
 */
function bingo(ticket, win){
    //Evaluate if any char code letter in the subarray matches number to get a mini win. Will need to count mini wins.
    let miniWin = 0;
    for(let i=0; i<ticket.length; i++){
        for(let j=0; j<ticket[i][0].length; j++){
            //variable to hold the letter code
            let letterCode = ticket[i][0].charCodeAt(j);
            if(letterCode === ticket[i][1]){
                miniWin++;
                break;
            }
        }
    }
    console.log(miniWin,win)
    //If mini wins is greater than or equal to win, return 'Winner!', else 'Loser!'
    if(miniWin>=win){
        return "Winner!";
    }else{
        return "Loser!";
    }
}
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))//Loser!
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))//Winner!
console.log(bingo([["SKWK",73], ["UHLMGJ",88], ["WDINN",78]], 2))//Loser!