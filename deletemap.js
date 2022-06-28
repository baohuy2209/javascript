// map.delete(key) 


var map1 = new Map([[1,19],[2,20],[3,30]]) 
console.log(map1.get(1)) 

map1.delete(1) 
console.log(map1.get(1))

console.log(map1.delete(2)) // true 

console.log(map1.delete(7))