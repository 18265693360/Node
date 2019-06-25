// 7，载入静态页面
// 前面的学习，我们写过很多页面，我们也可以将这些页面放到空间中，然后通过域名进行访问。
// 在node中，是没有Web容器，我们需要自己写代码来载入静态页面。
//
// 写代码实现载入静态页面：
// 先准备静态页面：
const http = require("http");
const fs = require("fs");
http.createServer(function (req,res) {
    fs.readFile("13 static.html",function (err,data) {
        if (err){
            console.log(err);
        } else{
            res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
            res.write(data);
            res.end();
        }
    })
})


​
// 为什么？ 对于img， 我们并没有读取...
// 1，如何获取请求信息​​
// 2，需要得到资源的位置
// 通过__dirname+req.url就可以得到我们所需要的位置
const http = require("http");
const fs = require("fs");
http.createServer(function (req,res) {
    var dir = __dirname + req.url;
    console.log(dir);
    fs.readFile(dir,function (err,data) {
        if (err){
            console.log(err);
        } else{
            res.statusCode = 200;
            res.write(data);
            res.end();
        }
    })
})