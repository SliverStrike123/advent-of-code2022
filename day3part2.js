import { readFileSync } from "fs"

var data = readFileSync('./input/day3.txt', 'utf8').toString().replace(/\r\n/g," ").split(" ");
var similiar = new Array()
const alphabets = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
function findgroup(a,b,c){
    var word1 = data[a]
    var word2 = data[b]
    var word3 = data[c]
    var same = new Array()
    var same2 = new Array()
    var x = word2.length
    for(let i=0; i<x; i++){
        let x = word1.indexOf(word2[i])
        if(x != -1){
            same.push(word1[x])
        }
    }
    var y = word3.length

    for(let i=0; i<=y; i++){
        let x = word2.indexOf(word3[i])
        if(x != -1){
            same2.push(word2[x])
        }
    }

    var z = same2.length
    var sameword = new Array()

    for(let i=0; i<=z; i++){
        let x = same.indexOf(same2[i])
        if(x != -1){
            sameword.push(same[x])
        }
    }
    
    if(sameword.length > 1){
        let x = sameword.length - 1

        for(let i=0; i<x; i++){
            sameword.shift()
        }
    }

    var point = alphabets.indexOf(sameword[0]) + 1

    return point
}

var a = 1
var b = 2
var l = data.length
var point = 0
for(let i=0; i<l;i+=3){
    point = point + findgroup(i,a,b)
    a += 3
    b += 3
}

console.log(point)