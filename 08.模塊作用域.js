const username = '張三'

function sayHello(){
    console.log('大家好，我是' + username)
}

//默認情況下，node 裡面是有模塊作用域，在模塊內定義的成員無法被外界訪問，只能在模塊內部自己訪問自己！