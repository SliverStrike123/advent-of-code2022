import { readFileSync } from "fs";

const data = readFileSync('./input/day6.txt', 'utf8').toString();

function findmarker(){
    let marker = new Array();
    let samenumber = false;
    for(let i = 0; i < data.length; i++){

        marker.forEach(element => {
            if(element == data[i]){
                samenumber = true
            }
        });

        marker.push(data[i]);

        if(samenumber == true){
            i = i - marker.lastIndexOf(data[i])
            marker = []
            samenumber = false
        };
        //interchange between 4 or 14 for each part1 and part2 ans respectively
        if(marker.length == 14){
            console.log(i + 1)
            break
        };
    };
};

findmarker()