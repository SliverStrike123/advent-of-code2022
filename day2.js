import { readFileSync } from "fs"

var data = readFileSync('./input/day2.txt', 'utf8').toString().replace(/\r\n/g," ").split(" ");

var rock = 1
var paper = 2
var scissors = 3
var w = 6
var l = 0
var d = 3

function victory(i,x){
    let outcome = data[x]
    let oppinput = data[i]
    let result = 0
    switch(outcome){
        case "X":
            if(oppinput == "A"){
                result = scissors + l;
                break;
            }
            else if(oppinput == "B"){
                result = rock + l;
                break;
            }
            else if(oppinput == "C"){
                result = paper + l;
                break;
            };
            break;
        case "Y":
            if(oppinput == "A"){
                result = rock + d;
                break;
            }
            else if(oppinput == "B"){
                result = paper + d;
                break;
            }
            else if(oppinput == "C"){
                result = scissors + d;
                break;
            };
            break;
        case "Z":
            if(oppinput == "A"){
                result = paper + w;
                break;
            }
            else if(oppinput == "B"){
                result = scissors + w;
                break;
            }
            else if(oppinput == "C"){
                result = rock + w;
                break;
            };
            break;
    }
    return result
}

var y = data.length
var result = 0
var x = 1
for(let i=0; i<y; i += 2){
    let point = victory(i,x)
    x += 2
    result = result + point
}

console.log(result)