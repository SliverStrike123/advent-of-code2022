import { readFileSync } from 'fs';

var datasum = new Array();
let tempdata = new Array();

function sumofarray(value){
    value 
}

var data = readFileSync('./input/day1.txt', 'utf8').toString().replace(/\r\n/g,"\n").split("\n");

var x = data.length

for(let i=0; i<x; i++){
    
    let sum = 0

    if(data[i] != 0){
        var int = parseInt(data[i])
        tempdata.push(int)
    }

    else{
        sum = tempdata.reduce((a, b) => b + a)
        datasum.push(sum)
        tempdata = []
    }
};

datasum.sort(function(a, b){return b - a})
console.log(datasum)
var total = datasum[0] + datasum[1] + datasum[2]
console.log(total);
