import fs from "fs";

const data = fs.readFileSync('./input/day12.txt', 'utf8').toString().replace(/\r\n/g,"\n")

const row = data.split("\n").length

const lines = data.split("\n")

const col = data.split("\n")[0].length


function formGrid(){

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
console.log(formGrid()[1])