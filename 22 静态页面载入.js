var http =require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');//node 自带模块 做拼接
//mime 模块是为了用过文件后缀名得到正确的content-type
var mime = require('mime');


http.createServer(function (req, res) {
    var pathUrl = req.url;
    var urlObj = url.parse(pathUrl);
    var pathName = urlObj.pathname;

    console.log(pathName);

    //仅仅载入了 文本 图片还不能载入
    if (pathName == '/index1.html'){
        fs.readfile(path.join(__dirname, pathName), function (err,data) {
           res.setHeader('content-type', 'text/html; charset=utf-8');
           res.write(data);
           res.end();
        })

        //css img等静态资源加载
    } else {
        fs.readFile(path.join(__dirname, pathName), function (err,data) {
          if (err){
              res.write('<h1>页面没找到404</h1>>');
              res.statusCode = 404;
              res.end();
          } else{
              var extname = path.extname(pathName);
              console.log('拓展名', 'extname');//01.jpg ==> .jpg
              var resultExtname = extname.substring(1);
              res.setHeader('content-type', mime.getType(resultExtname))
              console.log(mime.getType(resultExtname));
              res.write(data);
              res.end();
          }
        })
    }
}).listen(3000);

    //path.extname() 方法返回path的扩展名 从最后一次出现.字符到path最后一部分的字符串结束
    //如果在path的最后一部分中没有. 或者path的基本名称除了第一个字符之外没有. 则返回空字符串

    //加载图片
    // else if (pathName == '/img/01.JPG'){
    //     fs.readFile(path.join(__dirname, pathName),function (err,data) {
    //         if (err){
    //             console.log(err);
    //             return
    //         }
    //         console.log(data);
    //         res.setHeader('content-type', 'image/JPG');
    //         res.write(data);
    //         res.end();
    //     })
    // }



// 对象放在堆区