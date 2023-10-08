/**
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
 */

//Math.floor for answers so integer answer is given
//If a number is receiving a parameter of a function, it needs to perform an operation on that function, else it needs to return its number

function zero(e) {
    if(e !== undefined){
        if(e.includes("/")){
            return Math.floor(eval(`0${e}`))
        }else {
            return eval(`${e}0`)
        }
    }else{
        return 0
    }
}
function one(f) {
    if(f !== undefined){
        if(f.includes("/")){
            return Math.floor(eval(`1${f}`))
        }else {
            return eval(`${f}1`)
        }
    }else{
        return 1
    }
}
function two(g) {
    if(g !== undefined){
        if(g.includes("/")){
            return Math.floor(eval(`2${g}`))
        }else {
            return eval(`${g}2`)
        }
    }else{
        return 2
    }
}
function three(h) {
    if(h !== undefined){
        if(h.includes("/")){
            return Math.floor(eval(`3${h}`))
        }else {
            return eval(`${h}3`)
        }
    }else{
        return 3
    }
}
function four(k) {
    if(k !== undefined){
        if(k.includes("/")){
        return Math.floor(eval(`4${k}`))
    }else {
        return eval(`${k}4`)
    }
    }else{
        return 4
    }
}
function five(l) {
    if(l !== undefined){
        if(l.includes("/")){
            return Math.floor(eval(`5${l}`))
        }else {
            return eval(`${l}5`)
        }
    }else{
        return 5
    }
}
function six(m) {
    if(m !== undefined){
        if(m.includes("/")){
        return Math.floor(eval(`6${m}`))
    }else {
        return eval(`${m}6`)
    }
    }else{
        return 6
    }
}
function seven(n) {
    if(n !== undefined){
        if(n.includes("/")){
            return Math.floor(eval(`7${n}`))
        }else {
            return eval(`${n}7`)
        }
    }else{
        return 7
    }
}
function eight(o) {
    if(o !== undefined){
        if(o.includes("/")){
            return Math.floor(eval(`8${o}`))
        }else {
            return eval(`${o}8`)
        }
    }else{
        return 8
    }
}
function nine(p) {
    if(p !== undefined){
        if(p.includes("/")){
        return Math.floor(eval(`9${p}`))
    }else {
        return eval(`${p}9`)
    }
    }else{
        return 9
    }
}

function plus(a) {
    return `${a}+`
}
function minus(b) {
    return `-${b}+`
}
function times(c) {
    return `${c}*`
}
function dividedBy(d) {
    return `/${d}`
}

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))
console.log(eight(dividedBy(three())))
console.log((dividedBy(two())))