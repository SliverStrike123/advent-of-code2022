import { appendFile, readFileSync } from "fs";
import { fileURLToPath } from "url";

var data = readFileSync('./input/day5.txt', 'utf8').toString().replace(/\r\n/g," ").split(" ");
var x = 1
var y = 3
var stacks = {
    1: ['T','Z','B'],
    2: ['N','D','T','H','V'],
    3: ['D','M','F','B'],
    4: ['L','Q','V','W','G','J','T'],
    5: ['M','Q','F','V','P','G','D','W'],
    6: ['S','F','H','G','Q','Z','V'],
    7: ['W','C','T','L','R','N','S','Z'],
    8: ['M','R','N','J','D','W','H','Z'],
    9: ['S','D','F','L','Q','M']
};
//part1
function movingpart1(a,b,c){
    
    for(let i = 1; i <= data[a]; i++){
        stacks[data[c]].unshift(stacks[data[b]][0])
        stacks[data[b]].shift()
    }
    let firstletters = ""
    for(let i = 1; i <= 9;i++){
        firstletters = firstletters.concat(stacks[i][0])
    }
    return firstletters
}

function movingpart2(a,b,c){
    let x = data[a] - 1
    for(let i = 1; i <= data[a]; i++){
        stacks[data[c]].unshift(stacks[data[b]][x])
        
        x--
    }
    for(let i = 1; i<= data[a]; i++){
        stacks[data[b]].shift()
    }
    let firstletters = ""
    for(let i = 1; i <= 9;i++){
        firstletters = firstletters.concat(stacks[i][0])
    }
    return firstletters
}


for(let z = 5;z <= data.length; z += 6){
    var result = movingpart2(x,y,z)
    x += 6
    y += 6
}
console.log(result)



