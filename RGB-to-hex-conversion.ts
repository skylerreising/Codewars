/*
RBG To Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

export function rgb(r: number, g: number, b: number): string {
    let redGreenBlue: number[] = [r,g,b];

    return redGreenBlue.map(x => {
        x < 0 ? x = 0 : x;
        x > 255 ? x = 255 : x;
        let hex = x.toString(16);
        return hex.length === 1 ? hex = `0${hex}` : hex;
    }).join("").toUpperCase();
  }

console.log(rgb(0,0,0));
console.log(rgb(0,0,-20));
console.log(rgb(300,255,255));
console.log(rgb(173,255,47));
