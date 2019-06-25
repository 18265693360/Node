var http = require('http');//http自带原装

var server = http.createServer(function (request,response) {
    //设置响应头 规定代码解析方式
    response.setHeader('content-type', 'text/html;charset=utf-8');

    response.write('<h1>今天好热</h1>');
    //req请求  res响应
    //告诉浏览器响应什么
    response.write('hello world');
    response.write('continue');
    //一定有结束响应结束
    response.end();
});

server.listen(3000);
//停止 ctr + c + 回车