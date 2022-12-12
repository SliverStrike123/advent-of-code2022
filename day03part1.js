import { readFileSync } from "fs"

var data = readFileSync('./input/day3.txt', 'utf8').toString().replace(/\r\n/g," ").split(" ");
var similiar = new Array()
const alphabets = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

function findsimiliar(y){

    var text = data[y]

    var length = text.length

    var x = length/2

    var firsthalf = text.substring(0,x)

    var secondhalf = text.substring(x,length)

    var a = firsthalf.length

    var x = 0

    for(let i=0; i<=a; i++){

        let index = secondhalf.indexOf(firsthalf[i])
        if(index != -1){
            if(x == secondhalf[index]){
                return
            }
            else{
                x = secondhalf[index]
                return x
            }
        }
    }
}

var z = data.length
var point = 0

for(let i=0;i<z;i++){
    let found = findsimiliar(i)
    similiar.push(found)
    point = point + alphabets.indexOf(similiar[i]) + 1
}

console.log(point)