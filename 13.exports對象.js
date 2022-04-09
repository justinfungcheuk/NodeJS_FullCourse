/*
console.log(exports)
console.log(module.exports)

// 默認情況下，exports 和 module.exports 指向同一個對象。最終共享的結果，還是以 module.exports 指向的對象為準。
console.log(exports === module.exports) //true
*/

const username = 'zs'

exports.username = username
exports.age = 20
exports.sayHello = function(){
    console.log('大家好!')
}