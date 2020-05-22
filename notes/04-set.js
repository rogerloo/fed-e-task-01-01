const a = Array.from(new Set([1,2,3,4,2,1,4,5]));
// console.log(a)
// size has delete clear

const m = new Map();
const roger = {name:'roger'}
m.set(roger, 25)
console.log(m.get(roger))
m.forEach((val, key)=>{
    console.log(val, key)
})