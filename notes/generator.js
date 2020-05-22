function * foo(){
    console.log('开始');
    try{
        const result = yield 'roger'
        console.log(result);
    }catch(e){
        console.log(e)
    }
}

// const generator = foo();
// const res = generator.next();
// // generator.next('ling');
// generator.throw(new Error('error'))
// console.log(res)

function ajax(url){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = function(){
            if(this.status === 200){
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        };
        xhr.send()
    })
};


function reactive(obj){
    obj = new Proxy(obj, {
        get: function(target, property){

        },
        set: function(target, property){
            
        }
    });
    return obj
};
function watch(effect){

}
const state = reactive({
    foo: 100,
    bar: 200
});

watch(()=>{
    console.log('foo changed: ',state.foo)
})

watch(()=>{
    console.log('bar changed: ',state.bar)
})

state.foo ++ ;
state.bar ++ ;