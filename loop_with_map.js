const map = new Map([[1,2],[3,4]]) 
var mymap = new Map([[1,17],[2,18],[3,19],[4,20]])
for(const [key,value] of map){
    console.log(`key : ${key} value : ${value}`)
}
console.log("==================================")
for(var [key,value] of mymap) {
    console.log(`key : ${key} value : ${value}`)
}

console.log("==================================")
for(var key of map.keys()){
    console.log(`key : ${key}`)
}
console.log("=================================")
for(var key of mymap.keys()) {
    console.log(`key : ${key}`)
}


for(var value of map.values())
{
    console.log(value)
}