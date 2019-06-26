//搭建服务器初始

var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('qs');


//req 方法
//第一个 url

//ip地址头一个必备 才能访问 113.23.43.22：80(端口)
//再加一个http协议
//所有请求都到DNS服务器  然后把域名转换成ip地址
//域名
// eg: www.baidu
// www.二级域名  baidu主域名 主域名只有一个 二级域名可以有很多
// 二级域名
// 二级域名更好记，也更具有意义，其次网站管理员来说，除非是特别重要的频道，不然不会绑定成二级域名，所以搜索引擎更重视绑定二级域名的频道。
// localhost就是本地域名


// https://docs.qq.com/desktop/?_from=1
//以问号开头的是 queryString 查询字符串 放在域名之后及资源路径之后
// 放在hash之前
//作用 前段向后端提交某些信息的时候
//查询字符什么时候用 一般来说 在浏览器需要获取数据的时候 （不是提交数据的时候）

// https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en&text=%E6%9C%8D%E5%8A%A1%E5%99%A8
// 锚点 #view=home&op=translate&sl=zh-CN&tl=en&text=服务器
//hash 前端拿到的 不会刷新页面  hash 不仅仅限于做锚点  锚点不提交到服务器






var server = http.createServer(function (req,res) {

    console.log(req.method);//地址栏输入都是get 请求

    console.log(req, headers);
    //user Agent
    var urlObj = url.parse(req.url);

    if (req.url == 'index.html'){
        fs.readFile('./index.html', function (err,data) {
            if (err){
                res.write(404);
                res.end();
                return
            }
            res.setHeader('content-type', 'text/html;charset=utf-8');
            res.write(data);
            res.end();
        })
    } res.write('404');
    res.end();
    console.log(req.message.statusCode);
    // //设置响应头        告诉浏览器如何解析传回来的数据
    // res.setHeader('content-type', 'text/html;charset=utf-8')
    // res.write('这是中国')
    // res.end();
}).listen(3000);

server.listen(3000);