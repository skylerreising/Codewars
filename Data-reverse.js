/**
 * A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
 */
function dataReverse(data) {
    //code needs to be divided into subarrays that are 8 elements long then reverse the order of subarrays then return
    let subArrays = []
    for(let i=0; i<data.length; i+=8){
        subArrays.unshift(data.slice(i,i+8));
    }
    //put all of the elements in each subArray into one array to be returned
    let retArray = []
    for(let i=0; i<subArrays.length; i++){
        for(let j=0; j<8; j++){
            retArray.push(subArrays[i][j])
        }
    }
    return retArray;
  }
  console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))