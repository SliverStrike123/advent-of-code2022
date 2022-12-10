import fs from "fs"

const data = fs.readFileSync('./input/day9.txt', 'utf8').toString().replace(/\r\n/g,"\n").split("\n");
const direction = []
const count = []
var tailvisited = []
const position = new Array(10).fill().map(() => [0,0])
var headposition = position[0]
for(let line in data){
    direction.push(data[line].split(" ")[0])
    count.push(data[line].split(" ")[1])
}

for(var line in data){
    var xmove = 0
    var ymove = 0
    switch (direction[line]) {
        case "L":
            xmove = parseInt(-count[line])
            break;

        case "R":
            xmove = parseInt(count[line])
            break;

        case "U":
            ymove = parseInt(count[line])
            break;

        case "D":
            ymove = parseInt(-count[line])
            break;
    
        default:
            break;
    }

    
    var finalposition = [position[0][0] + xmove, position[0][1] + ymove]
    tail()
}

function tail(){
    
    let x = xmove
    let y = ymove

    let move = Math.abs(x) + Math.abs(y)

    for(let i = 1; i <= move;i++){
        if(position[0][0] != finalposition[0]){
            position[0][0] += Math.sign(xmove)
        }
        if(position[0][1] != finalposition[1]){
            position[0][1] += Math.sign(ymove)
        }
            for(let i = 0, x = 1;x < position.length;x++,i++){
                let xdist = position[i][0] - position[x][0]
                let ydist = position[i][1] - position[x][1]
                if(Math.abs(xdist) > 1 || Math.abs(xdist) + Math.abs(ydist) > 2){
                    position[x][0] += Math.sign(xdist)
                }
                if(Math.abs(ydist) > 1 || Math.abs(xdist) + Math.abs(ydist) > 2){
                    position[x][1] += Math.sign(ydist)
                }
            }
        tailvisited.push(JSON.parse(JSON.stringify(position[9])))
    }
}

var filtered = new Array([0,0])

for(let i = 0;i < tailvisited.length;i++){
    let duplicate = false
    filtered.forEach(element => {
        if(tailvisited[i][0] == element[0] && tailvisited[i][1] == element[1]){
            duplicate = true
        }
    })
    if(duplicate == false){
        filtered.push(tailvisited[i])
    }
}

console.log(filtered.length)