import fs from "fs"

const data = fs.readFileSync('./input/day9.txt', 'utf8').toString().replace(/\r\n/g,"\n").split("\n");
var direction = []
var count = []
var headposition = {
    "vertical": 0,
    "horizontal": 0
}
var tailposition = {
    "vertical": 0,
    "horizontal": 0
}
var visited = []
var horidistance = 0
var verdistance = 0

for(let line in data){
    direction.push(data[line].split(" ")[0]) 
    count.push(parseInt(data[line].split(" ")[1]))
}

for(let line in data){
    let move = direction[line]
    let num = count[line]

    for(let i = 0;i < num ;i++){
        let currentposition = {
            "horizontal": 0,
            "vertical": 0
        }
        if(move == "R"){
            headposition.horizontal += 1
            horidistance = headposition.horizontal - tailposition.horizontal
            if(horidistance > 1){
                tailposition.horizontal = headposition.horizontal - 1
                if(tailposition.vertical != headposition.vertical){
                    tailposition.vertical = headposition.vertical
                }
                
                currentposition.horizontal = tailposition.horizontal
                currentposition.vertical = tailposition.vertical
                visited.push(currentposition)
            }
            continue
        }
        else if(move == "L"){
            headposition.horizontal -= 1
            horidistance = tailposition.horizontal - headposition.horizontal
            if(horidistance > 1){
                tailposition.horizontal = headposition.horizontal + 1
                if(tailposition.vertical != headposition.vertical){
                    tailposition.vertical = headposition.vertical
                }
                currentposition.horizontal = tailposition.horizontal
                currentposition.vertical = tailposition.vertical
                visited.push(currentposition)
            }
            continue
        }
        else if(move == "U"){
            headposition.vertical += 1
            verdistance = headposition.vertical - tailposition.vertical
            if(verdistance > 1){
                tailposition.vertical = headposition.vertical - 1
                if(tailposition.horizontal != headposition.horizontal){
                    tailposition.horizontal = headposition.horizontal
                }
                currentposition.horizontal = tailposition.horizontal
                currentposition.vertical = tailposition.vertical
                visited.push(currentposition)
            }
            continue
        }
        else if(move == "D"){
            headposition.vertical -= 1
            verdistance = tailposition.vertical - headposition.vertical
            if(verdistance > 1){
                tailposition.vertical = headposition.vertical + 1
                if(tailposition.horizontal != headposition.horizontal){
                    tailposition.horizontal = headposition.horizontal
                }
                
                currentposition.horizontal = tailposition.horizontal
                currentposition.vertical = tailposition.vertical
                visited.push(currentposition)
            }
        }
    }
}

var filtered = [{
    horizontal: 0, 
    vertical: 0
}]

for(let i = 0;i < visited.length;i++){
    let duplicate = false
    filtered.forEach(element => {
        if(visited[i].vertical == element.vertical && visited[i].horizontal == element.horizontal){
            duplicate = true
        }
    })
    if(duplicate == false){
        filtered.push(visited[i])
    }

}

console.log(filtered.length)