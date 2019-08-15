// // 参数是整数，指定分配多少个字节内存
// var hello = new Buffer(5);

// // 参数是数组，数组成员必须是整数值
// var hello = new Buffer([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
// let str = hello.toString() // 'Hello'
// console.log(str)

// let hello = new Buffer('Hello', 'utf8')
// console.log(hello);
// let hello1 = new Buffer('Hello')
// let hello2 = new Buffer(hello)
// console.log(hello1, hello2)

// let buf = new Buffer(1234)
// console.log(buf.length)
// buf.write('some string', 0, 'ascii')
// console.log(buf.length);

// var buf = new Buffer(5);
// buf.write('He');
// buf.write('l', 2);
// buf.write('lo', 3);
// console.log(buf.toString());
// console.log(process.cwd());
console.log(require('http').STATUS_CODES['302']);



