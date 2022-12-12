import { readFileSync } from "fs";

var data = readFileSync('./input/day4.txt', 'utf8').toString().replace(/\r\n/g,",").split(",");

function range(a){
    let range = data[a].split("-")
    let x = parseInt(range[0])
    let y = parseInt(range[1]) 
    let result = new Array()
    for(let i = x; i <= y; i++){
        result.push(x)
        x += 1
    }
    return result
};

function comparerange(b,c){
    let range1 = range(b)
    let range2 = range(c)
    let same = new Array()

    if(range2.length >= range1.length){
        for(let i = 0; i <= range2.length; i++){
            if(range2.indexOf(range1[i]) != -1){
                same.push(range2[range2.indexOf(range1[i])])
            }
        }
    }
    else{
        for(let i = 0; i <= range1.length; i++){
            if(range1.indexOf(range2[i]) != -1){
                same.push(range1[range1.indexOf(range2[i])])
            } 
        }
    }

    console.log(same)

    if(same.length > 0){
        return 1
    }
    else{
        return 0
    }
    
};

var count = 0;
var m = 0;

for(let i=1; i<=data.length; i += 2){
    count = count + comparerange(m,i)
    m += 2
};

console.log(count)