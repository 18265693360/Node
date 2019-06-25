// var obj = {
//     text:"今天好热",
//     like:"今天想喝水"
// };
//
//
// var arr = [1,3,4,5];












// 导出模块语句  但导出只能有一个
module.exports = obj;

// 想导出多个对象
module.exports = {
    obj: obj,
    arr: arr
};


// 当导出一个类名（对象）时,使用module.exports，
// 当导出一个变量或函数时，使用exports
var name = "xx";
var age = 10;
var spk = function () {
    console.log('hello');
};
exports.name = 'xx';
exports.age = 10;
exports.spk = function () {
    console.log('hello');
}

//导出模块
var cat = {
    name:'xiaoxiong',
    age:2,
    sound:function () {
        console.log('hello');
    }
};

module.exports = cat;






//爬虫要用的模块
var request = require('request');
var fs = require('fs');


request('https://www.baidu.com', function (error, response, body) {
    console.log('error;', error);//Print the error if one occurred
    console.log('statusCode;', response && response.statusCode);
    //Print the response status code if a response was received
    console.log('body;', body);//Print the HTML for the Google homepage

    //爬取百度 然后写入baidu.html文件
    fs.writeFile('baidu.html', body, function (err) {
        if (err){
            console.log(err);
        } else{
            console.log("爬取成功");
        }
    })
});






//模块运用 command规范 又叫 command JS
// (最早就是command运用模块 所以叫command规范)

//模块系统现在分两种情况 第一种 用自己封装的模块 require('路径')
//第二种应用第三方的模块
// 第三方模块是官方内置的 require('模块名')
// 第三方不是官方内置的  npm install 模块名 继续 require()引入



//淘宝换源
// npm config set registry https://registry.npm.taobao.org
// node_modules 第三方模块存在的地方