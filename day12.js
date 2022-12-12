import fs from "fs";

const data = fs.readFileSync('./input/day12.txt', 'utf8').toString().replace(/\r\n/g,"\n")

const row = data.split("\n").length

const lines = data.split("\n")

const col = data.split("\n")[0].length

var text = "b"

console.log(text.charCodeAt())

function makeMap(){

    let grid = {}
    for(let i = 0;i < row;i++){
        grid[i] = new Array(row)
    }
    for(let i = 0;i < row;i++){
        for(let j = 0; j < col; j++){
            grid[i][j] = data.split("\n")[i][j]
        }
    }
    return grid
}
function formGrid(){
    let map = {}
    for(let i = 0; i < row; i++){
        map[i] = new Array(col).fill(".")
    }
    return map
}

function search(){
    let map = makeMap()
    let grid = formGrid()

    let len = Object.keys(map).length

    for(let i = 0; i < len; i++){
        if(grid[i].indexOf("S") != -1){
            let found = grid[i].indexOf("S")
            var startingposition = [found, i]
        }
    }

    console.log(startingposition)

}

search()