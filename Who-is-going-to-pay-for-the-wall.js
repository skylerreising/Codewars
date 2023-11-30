/**
 * Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
 */
function whoIsPaying(name){
    //control for length of 0,1, and 2
    if(name.length===0){
        return [""];
    }

    if(name.length===1){
        return [name[0]];
    }

    if(name.length===2){
        return [name[0]+name[1]];
    }

    return [name, name[0]+name[1]];
}
console.log(whoIsPaying("Mexico"))//["Mexico", "Me"]