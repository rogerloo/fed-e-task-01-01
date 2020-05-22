// if(true) {
//     // var foo = '111'
//     let foo = '111'
// }
// console.log(foo)
//------------------
const url = '/src/assets/1.png'
const [,rootdir] = url.split('/')
// console.log(rootdir)


const obj = {
    name: 'roger',
    age: '18'
}
const name = 'luo'
const {name: objName} = obj;
// console.log(objName)
// const str = console.log`roger alice`


const func1 = function(str, name, objName){
    // console.log(str, name, objName)
    return str[0]+name+str[1]+objName+'\'dad'
}
const result = func1`hey, ${name} is a ${objName}`
// console.log(result)



const msg = 'Error: foo is not defined.';
// console.log(
//     // msg.startsWith('Error')
//     // msg.endsWith('.')
//     msg.includes('foo')
// );


const func2 = function( age,name = 'lili',gender='male'){
    console.log(name, age, gender)
};
// func2(22, undefined, 'female');


function func3 (f, s, ...rest){
    console.log(f, s ,rest)
};
// func3(1,2,3,4)

const arr = ['foo', 'bar', 'bar2']
console.log.apply(console, arr)
// console.log(...arr)

const obj2 = {name:'ling'};
const newObj = Object.assign(obj2,obj);
// console.log(newObj === obj2);

