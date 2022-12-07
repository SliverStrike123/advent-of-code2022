import { readFileSync } from "fs";

const data = readFileSync('./input/day7.txt', 'utf8').toString().replace(/\r\n/g,"\n").split("\n");
const ROOT = "/"
var directory = [ROOT]
var foldersize = {}
var size = 0
var sumsize = 0

//the function
for(let i=0;i<data.length;i++){

    let word = data[i].split(" ")
    if(word[0] == "$"){
        if(word[1] == "cd"){
            if(word[2] == ".."){
                directory.pop()
            }
            else if(word[2] != "/"){
                directory.push(word[2])
            }
        }
    }
    else if(/^\d+$/.test(word[0]) && word[0] != "dir"){
        size = parseInt(word[0])
        sumsize += size

        let tmp = [...directory]
        while(tmp.length > 0){
            let key = tmp.join("")
            if(!foldersize[key]){
                foldersize[key] = 0
            }
            foldersize[key] += size
            tmp.pop()
        }
    }
    
    foldersize['/'] = sumsize
   
}
//part 1
var find_lessthan = Object.values(foldersize).filter(value => value <= 100000)
console.log(find_lessthan.reduce((a,b) => a + b,0))

//part2
var space = 70000000 - sumsize
var find_delete = Object.values(foldersize).filter(value => (space + value) >= 30000000)
console.log(find_delete.sort()[0])
