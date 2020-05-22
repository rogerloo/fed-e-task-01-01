const obj = {
    name: 'roger',
    gender: 'male'
}
// const obj = ['31','42']
const objProxy = new Proxy(obj, {
    get(target, property){
        console.log(property in target?'hh':'ww');
        return 111
    },
    set(target, property, value){
        console.log(target, property, value);
        // return value
        if(Number.isInteger(value)){
            target[property] = value
        }
    }
})
// console.log(objProxy[99])
objProxy.age = 21;
// console.log(objProxy)

// delete objProxy.name
Reflect.deleteProperty(objProxy, 'name');
console.log(Reflect.has(objProxy, 'name')) 
// console.log(objProxy)

// Reflect 静态类 方法名与proxy内部拦截方法一致
// Reflect.has() === x in obj
// Reflect.deleteProperty() == delete obj.x
// Reflect.ownKeys() == Object.keys()
// Reflect.construct() == new obj(...args)