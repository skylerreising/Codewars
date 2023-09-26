/**
 * Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
 */

function towerBuilder(nFloors) {
    //the top of the tower is a star surrounded by n-1 spaces
    //every subsequent tower adds 2 stars and removes two spaces
    //need an array to hold the tower
    let towerArray = []

    //need a loop to add strings to the tower
    for(let i=1; i<=nFloors; i++){
        //need a variable to hold each string in. Make an array and join it later
        let str = []
        //a function to add spaces to the string - should be nFloors - 1
        function addSpace(){
          for(let j=1; j<=nFloors-i; j++){
              str.push(" ")
          }   
        } 
        addSpace()
        
        //a function to add *s to the string
        for(let k=1; k<=(i*2)-1; k++){
            str.push("*")
        }
       //Stop or add more spaces
      if(str.length !== i*2-1){
        addSpace()
      }
        
        towerArray.push(str.join(""))
    }
    return towerArray
  }

  console.log(towerBuilder(1))
  console.log(towerBuilder(2))
  //[
    // " * "
    // "***"
//   ]
  console.log(towerBuilder(3))
  console.log(towerBuilder(4))