// 1，什么是HTTP
// HyperText Tansfer Protocol   超文本传输协议
//
// http协议是服务器传输超文本到浏览器的传输协议，也是一个标准（规范），用来规定，服务器和客户端是如何进行信息传输的。
//
// http包含http请求和http响应：

// （2）http请求
// http请求由三部分组成：
// 请求行
// 请求头
// 请求正文



// （3）http响应
// http响应也分三部分组成：
// 状态行
// 响应头
// 响应正文

// 对于上面的http模型，在nodejs中都是通过对象来描述的，服务器也是一个对象，请求也是一个对象，响应也是一个对象。



// 问题：在css中，通常会使用大图，小图合成大图，有的地方也叫它为精灵图，或叫它雪碧图，你使用精灵图有什么好处？
// 答：在web中，每一个文件都是资源，每一个资源都对应了一次请求和响应了，如果有10张图片，就需要请求10次，每一次都是需要花费时间的。当把10张小图，合并成一个大图时，这个资源所对应的请求就只有一次，从而可以节省时间，提高性能。

// 我们先去学习Server对象：
// 第一步，如何去创建一个Server对象？
// 答：通过http.createServer(); 就可以创建一个Server对象。
//引入http模块
const http = require('http');
//创建一个Server对象
const server = http.createServer();

// 注册用户请求事件
server.on("request",function (req,res) {
    //req是请求的信息 res表示服务器端的响应
    res.writeHead(200, {"content-type":"text/html;charset=utf-8"});
    res.write("哈哈,今天非常开心");
    res.end();
});

// 第三步，在某个端口监听来自浏览器的请求
server.listen(3000);


//新的写法
const http = require('http');
const server = http.createServer(function (req,res) {
    res.writeHead(200,{"content-type": "text/html;charset=utf-8"});
    res.write('哈哈，今天好热');
    res.end();
})
server.listen(3000);

//ES6写法
const http = require(http);
const server = http.createServer((req,res)=> {
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    res.write("呵呵，今天好热")
    res.end();
});
server.listen(3000);




