// （1）URL介绍
// URL： Uniform  Resource  Location   统一资源定位符
// URL用来表示一个资源（html页面，音乐，图片，视频.....）在互联网上的一个地址，我们可以通过URL访问到这个资源。
//
// 在html中，href属性，src属性都可以对应到一个资源。
//
// URL具有唯一性，它的唯一性，是如何实现的？


// 协议：通信协议，常见的有http，https, ftp等
// 身份验证：对于http,https协议，身份验证，忽略不计。
// 主机：www.baidu.com   localhost    192.168.0.110
// 端口：对于http服务，一般是80端口


// 当我们想对查询字符串解析时，那么我们需要进一步的解析我们的url。在nodejs中专门又提供了一个模块，这个模块专门用来解析url， 这个模块就叫url模块。

// 如果使用这个模块，也需要引入。

// 对于url模块使用如下：

const url = require("url");
const http = require("http");

http.createServer((req,res)=>{
    var u = url.parse(req,url);
    console.log(u);
}).listen(3000);


// 什么时候需要对查询字符串解析？
//当输入一个查询字符串时 出现了空白页 这个时候就要对查询字符串进行解析
//传统方式
const url = require('url');
const http = require('http');


http.createServer((req,res)=>{
    var realUrl = "http://" + req.headers.host + req.url;
    var u = url.parse(realUrl)
    console.log(u);
}).listen(3000);

// 通过原始我方式，我们可以达到需求。那么原始的方式，比较复杂，nodejs提供了一个模块：querystring模块。
const url = require('url');
const http = require('http');
const querystring = require("querystring");

http.createServer((req,res)=>{
   var realUrl = "http://" + req.headers.host + req.url;
   var u = url.parse(realUrl);
   var qs = querystring.parse(u.query);
    console.log(qs);
    console.log(qs.name);
    console.log(qs.age);
}).listen(3000);








