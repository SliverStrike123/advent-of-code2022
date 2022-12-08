import { readFileSync } from "fs";

const data = readFileSync('./input/day8.txt', 'utf8').toString().replace(/\r\n/g,"\n").split("\n");

var score = 0;
var scores = [];

for(let row in data){
    var num = data[row].split("")
    if(row == 0){
        continue
    };
    if(row == num.length - 1){
        break
    };
    for(let i in num){
        if(i == 0){
            continue
        };
        if(i == num.length - 1){
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
        while(left.length > 0){
            let leftside = parseInt(left.pop())
            if(parseInt(num[i]) <= leftside){
                l += 1
                left.length = 0
            }
            else if(parseInt(num[i]) > leftside){
                l += 1
            }
        };
        while(right.length > 0){
            let rightside = parseInt(right.shift())
            if(parseInt(num[i]) <= rightside){
                r += 1
                right.length = 0
            }
            else if(parseInt(num[i]) > rightside){
                r += 1
            }
        };
        while(up.length > 0){
            let upside = parseInt(up.pop())
            if(parseInt(num[i]) <= upside){
                u += 1
                up.length = 0
            }
            else if(parseInt(num[i]) > upside){
                u += 1
            }
        };
        while(down.length > 0){
            let downside = parseInt(down.shift())
            if(parseInt(num[i]) <= downside){
                d += 1
                down.length = 0
            }
            else if(parseInt(num[i]) > downside){
                d += 1
            }
        };
        score = u * l * r * d
        scores.push(score)
    };
};

var filter = scores.sort(function(a, b){return b - a});
console.log(filter[0]);

