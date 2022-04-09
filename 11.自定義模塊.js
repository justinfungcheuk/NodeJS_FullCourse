//在一個自定義模塊中，默認情況下，module.exports = {}

const age = 20

//向 module.exports 對象上掛載 username屬性
module.exports.username = 'zs'

//向 module.exports 對象上掛載 sayHello方法
module.exports.sayHello = function(){
    console.log('Hello!')
}

module.exports.age = age

//讓 module.exports 指向一個全新的對象
//注意！永遠是以 module.exports 指向的對象形式為準，但相同的後者會覆蓋前者
module.exports = {
    nickname: '小黑',
    sayHi() {
        console.log('Hi!')
    }
} 