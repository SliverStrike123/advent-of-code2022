import fs from "fs";

const data = fs.readFileSync('./input/day10.txt', 'utf8').toString().replace(/\r\n/g,"\n").split("\n");
const instruction = [];
var sum = [];
for(let line in data){
    
    instruction.push(data[line].split(" "))
};

var X = 1
//part1
for(let i = 0, cycle = 1;i < instruction.length;){
    
    let command = instruction[i][0]
    if(instruction[i].length == 2){
        var value = parseInt(instruction[i][1])
    };

    switch (command) {
        case "noop":
            cycle ++
            i++
            if(cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220){
                sum.push(JSON.parse(JSON.stringify(cycle*X)))
            }
            break;
            
        
        case "addx":
            cycle ++ 
            
            if(cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220){ 
                sum.push(JSON.parse(JSON.stringify(cycle*X)))
            }
            
            cycle ++
            
            X += value
            
            if(cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220){  
                sum.push(JSON.parse(JSON.stringify(cycle*X)))
            }
            i ++
            break;

        default:
            break;
    };
};

console.log(sum.reduce((a,b) => a + b));

//part 2
var screen = new Array()
X = 1
var process = 0
for(let i = 0, cycle = 1, y = 0;i < instruction.length;cycle++){
    let command = instruction[i][0]
    if(instruction[i].length == 2){
        var value = parseInt(instruction[i][1])
    };

    let least = X-1
    let most = X+1
    if(y >= least && y <= most){
        screen.push("#")
    }
    else{
        screen.push(".")
    }
    y++
    
    switch (command) {
        case "noop":
            i++
            break;
        
        case "addx":
            if(process < 2){
                process ++
            }
            if(process == 2){
                X += value
                i++
                process = 0
            }
        default:
            break;
    };
    if(screen.length == 40 && cycle <= 240){
        console.log(screen.join(""))
        screen = []
        y = 0
    };
};







