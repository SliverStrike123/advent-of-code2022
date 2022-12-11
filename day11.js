import fs from "fs";

var data = fs
	.readFileSync("./input/day11.txt", "utf-8")
	.split("\r\n")
	.map((m) => m.split("\n").map((a) => a.trim()));

var monkeyObj = {}

for(let m = 0, i = 0;m < data.length;m+=7,i++){

  monkeyObj[i] = {
    "items" : data[m+1][0].slice(16).trim().split(","),
    "Operation" : data[m+2][0].slice(16).trim(),
    "Test": data[m+3][0].slice(19).trim(),
    "Iftrue": data[m+4][0].slice(24).trim(),
    "Iffalse": data[m+5][0].slice(25).trim()
  }
}

var itemschecked = {}

for(var i = 0,round = 1;round<=20;i++){
  for(let x = 0; x < monkeyObj[i].items.length;){
      if(!itemschecked[i]){
        itemschecked[i] = 1
      }
      else{
        itemschecked[i] += 1
      }
      let old = parseInt(monkeyObj[i].items[x].trim())

      let relief = Math.floor(eval(monkeyObj[i].Operation) / 3)
      
      if(relief % parseInt(monkeyObj[i].Test) === 0){
        monkeyObj[monkeyObj[i].Iftrue].items.push(JSON.stringify(relief))
        monkeyObj[i].items.shift()
      }

      else if(relief % parseInt(monkeyObj[i].Test) !== 0){
        monkeyObj[monkeyObj[i].Iffalse].items.push(JSON.stringify(relief))
        monkeyObj[i].items.shift()
      }
      
  }
  if(i == 7){
    i = -1
    round ++
  }
}

var filtered = Object.values(itemschecked).sort((a,b) => b - a)

console.log(filtered[0] * filtered[1])

var data = fs
	.readFileSync("./input/day11.txt", "utf-8")
	.split("\r\n")
	.map((m) => m.split("\n").map((a) => a.trim()));

var monkeyObj = {}
var supermod = 1 // https://www.reddit.com/r/adventofcode/comments/zih7gf/2022_day_11_part_2_what_does_it_mean_find_another/izr7ucq/?context=8&depth=9 idk lol
for(let m = 0, i = 0;m < data.length;m+=7,i++){
  supermod *= parseInt(data[m+3][0].slice(19).trim())
  monkeyObj[i] = {
    "items" : data[m+1][0].slice(16).trim().split(","),
    "Operation" : data[m+2][0].slice(16).trim(),
    "Test": data[m+3][0].slice(19).trim(),
    "Iftrue": data[m+4][0].slice(24).trim(),
    "Iffalse": data[m+5][0].slice(25).trim()
  }
}

var itemschecked = {}

for(var i = 0,round = 1;round<=10000;i++){
  for(let x = 0; x < monkeyObj[i].items.length;){
      if(!itemschecked[i]){
        itemschecked[i] = 1
      }
      else{
        BigInt(itemschecked[i] += 1)
      }

      let old = parseInt(monkeyObj[i].items[x].trim()) 

      let relief = eval(monkeyObj[i].Operation) % supermod
      
      if(relief % parseInt(monkeyObj[i].Test) === 0){
        monkeyObj[monkeyObj[i].Iftrue].items.push(JSON.stringify(relief))
        monkeyObj[i].items.shift()
      }

      else if(relief % parseInt(monkeyObj[i].Test) !== 0){
        monkeyObj[monkeyObj[i].Iffalse].items.push(JSON.stringify(relief))
        monkeyObj[i].items.shift()
      }
   
  }
  if(i == 7){
    i = -1
    round ++
  }
}

var filtered = Object.values(itemschecked).sort((a,b) => b-a)

console.log(filtered[0] * filtered[1])
