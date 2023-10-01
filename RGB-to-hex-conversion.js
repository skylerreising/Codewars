/**
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
 */

function rgb(r, g, b){
    //decimal number is passed in which may have to be rounded
    //each parameter needs to be between or equal to 0-255. If its not, it needs to be rounded
    if(r>255){
        r=255
    }else if(r<0){
        r = 0
    }
    if(g>255){
        g=255
    }else if(g<0){
        g=0
    }
    if(b>255){
        b=255
    }else if(b<0){
        b=0
    }
    // return `${r}${g}${b}`
    //convert each value to hex.
    const hexTable = {
        10 : 'A',
        11 : 'B',
        12 : 'C',
        13 : 'D',
        14 : 'E',
        15 : 'F'
    }
    let c = Math.floor(r/16)
    let d = r % 16
    if(d>9){
        d = hexTable[d]
    }
    c = c % 16
    if(c>9){
        c = hexTable[c]
    }
    let e = Math.floor(g/16)
    let f = g % 16
    if(f>9){
        f = hexTable[f]
    }
    e = e % 16
    if(e>9){
        e = hexTable[e]
    }
    let x = Math.floor(b/16)
    let y = b % 16
    if(y>9){
        y = hexTable[y]
    }
    x = x % 16
    if(x>9){
        x = hexTable[x]
    }
    //return is hexadecimal value of numbers after they have been rounded
    return `${c}${d}${e}${f}${x}${y}`
  }

  console.log(rgb(255, 255, 273))
  console.log(rgb(255, 255, 278))
  console.log(rgb(0, 0, -20))
  console.log(rgb(148, 0, 211))
  console.log(rgb(300,255,255))
  console.log(rgb(173,255,47))