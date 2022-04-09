console.log(module)

// 在每個 .js 自定義模塊中都有一個 module對象，它裡面 存儲了和當前模塊相關的信息，打印如下：
/**
 * Module {
  id: '.',
  path: '/Users/justinfungcheuk/Desktop/NodeJS_Base/day2/code',
  exports: {},
  filename: '/Users/justinfungcheuk/Desktop/NodeJS_Base/day2/code/10.演示module對象.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/justinfungcheuk/Desktop/NodeJS_Base/day2/code/node_modules',
    '/Users/justinfungcheuk/Desktop/NodeJS_Base/day2/node_modules',
    '/Users/justinfungcheuk/Desktop/NodeJS_Base/node_modules',
    '/Users/justinfungcheuk/Desktop/node_modules',
    '/Users/justinfungcheuk/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
 */