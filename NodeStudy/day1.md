### Node基础
1. 回调函数
- 回调函数作为参数，默认是最后一个参数
- 回调函数本身的第一个参数是，上一步传入的错误对象
2. 模块化结构
- node.js采用模块化结构，遵循commonjs规范。
- 模块与文件是一一对应关系，加载模块就是加载对应的文件
- require用于加载指定的模块，加载时可以省略文件后缀名
```
var circle = require('./circle.js)
var circle = require('./circle)
```
- module是模块里的顶级对象，有exports属性，当其他文件引入的时候就是引入的exports
3. 异常处理