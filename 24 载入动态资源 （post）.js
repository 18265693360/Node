var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime'); //通过后缀名得到 content-type

http.createServer(function (req,res) {
    var pathUrl = req.url;
    var urlObj = url.parse(pathUrl);
    var pathName = urlObj.pathname;


    // http://localhost:3000/24post.html
    // 浏览器访问地址


    console.log(pathName);
    if (pathName == '/24post.html'){
        fs.readFile(path.join(__dirname, pathName), function (err, data) {
            res.setHeader('content-type', 'text/html;charset=utf-8');
            res.write(data);
            res.end();
        })
    } else if(pathName == '/submit'){//解析动态资源需要路由
        var str = '';
        req.on('data',function (chunk) {
            str+=chunk;
        });
        req.on('end', function () {
            console.log(str);
            res.setHeader('content-type', 'text/html;charset=utf-8');
            //post提交的内容不会显示在地址栏
            res.write('您提交的内容是：'+ str);
            res.end();
        })
    }
    else{
        fs.readFile(path.join(__dirname, pathName), function (err, data) {
            if (err) {
                res.write('<h1>页面没找到404</h1>');
                res.statusCode = 404;
                res.end();
            } else {
                var extname = path.extname(pathName);
                console.log('拓展名', 'extname'); //01.jpg ==> .jpg
                var resultExtname = extname.substring(1);
                res.setHeader('content-type', mime.getType(resultExtname));
                console.log(mime.getType(resultExtname));
                res.write(data);
                res.end();
            }
        })
    }
}).listen(3000);

