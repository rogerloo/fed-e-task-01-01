// const p = new Promise(function(resolve, reject){
//     // resolve(100);

//     reject(new Error('rejected'));
// })

// p.then(function(val){
//     console.log('resolve', val)
// },function(val){
//     console.log('reject', val)
// })

// console.log('end')


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

// ajax('./api/tet.json').then(function(val){
//     console.log('resolve', val)
// },function(val){
//     console.log('reject', val)
// })

// ajax('./api/url.json').then(function(val){
//     console.log('resolve', val)
// },function(val){
//     console.log('reject', val)
// }).then()

// promise对象的then方法会返回一个全新的promise对象
// 后面的then方法实际上在为上一个then返回的promise对象注册回调
// 前面then方法中回调函数的返回值会作为后面then方法回调的参数
// 如果回调中返回的是promise， 后面的then方法的回调会等待它的结束

// ajax('./api/uwrl.json').then(function(val){
//     console.log('resolve', val)
// }).catch(function(val){
//     console.log('reject', val)
// })

// window.addEventListener('unhandledrejection', event=>{
//     const { reason, promise} = event
//     console.log(reason, promise)
//     event.preventDefault()
// }, false)

// Promise.resolve({
//     then: function(onFulfilled, onRejected){
//         onFulfilled('roger')
//     }
// }).then(function(val){
//     console.log(val);
// })

// Promise.reject('any').catch(function(val){
//     console.loe(val)
// })


// const promise = Promise.all([
//     ajax('./api/url.json'),
//     ajax('./api/url.json'),
// ]);

// promise.then(function(val){
//     console.log(val)
// }).catch(error=>{
//     console.log(error)
// })

ajax('./api/url.json').then(val=>{
    // const urls = 
    const tasks = val.map(url => ajax(url));
    // return Promise.all(tasks);
    return Promise.race(tasks);
}).then(vals=>{
    console.log(vals)
}).catch(err=>{
    console.log(err)
})