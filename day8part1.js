import { readFileSync } from "fs";

const data = readFileSync('./input/day8.txt', 'utf8').toString().replace(/\r\n/g,"\n").split("\n");
var visibletrees = 0;

for(let row in data){
    //console.log(visibletrees)
    var num = data[row].split("")
    
    if(row == 0){
        visibletrees += num.length
        continue
    };
    if(row == num.length - 1){
        visibletrees += num.length
        break
    };
    for(let i in num){
        let isvisible = false
        if(i == 0){
            visibletrees += 1
            continue
        };
        if(i == num.length - 1){
            visibletrees += 1
            break
        };
        let left = [];
        let right = [];
        let up = [];
        let down = [];
        for(let x = 0; x <= i;x++){
            left.push(num[x])
        };
        left.pop();
        for(let x = i; x < data.length;x++){
            right.push(num[x])
        };
        right.shift();
        for(let x = 0; x <= row;x++){
            up.push(data[x][i])
        };
        up.pop();
        for(let x = row; x < data.length; x++){
            down.push(data[x][i])
        };
        down.shift();
        let l = 0;
        let r = 0;
        let u = 0;
        let d = 0;
        left.forEach(element =>{
            
            if(parseInt(num[i]) > parseInt(element)){
                l += 1
            }
            if(l == left.length){
                isvisible = true
            }
        });
        right.forEach(element =>{
    
            if(parseInt(num[i]) > parseInt(element)){
                r += 1
            }
            if(r == right.length){
                isvisible = true
            }
        });
        up.forEach(element =>{

            if(parseInt(num[i]) > parseInt(element)){
                u += 1
            }
            if(u == up.length){
                isvisible = true
            }
        });
        down.forEach(element =>{
     
            if(parseInt(num[i]) > parseInt(element)){
                d += 1
            }
            if(d == down.length){
                //console.log("visible from down")
                isvisible = true
            }
        });
        if(isvisible == true){

            //console.log(num[i])
            visibletrees += 1
            continue
        };
    };
};

console.log(visibletrees)