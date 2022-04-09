// 在外界使用 require 導入一個自定義模塊的時候，得到的成員，
// 就是 那個模塊中， 通過 module.exports 指向的那個對象
const m = require('./11.自定義模塊')

console.log(m)