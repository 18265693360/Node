var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');

// 1. 第一步先爬取html
// 2. 用cheerio读取爬回来的html
// 3. 用jquery语法得到所有的img
// 4. 将img的src得到
// 5. 遍历所有的src 爬取图片数据，并写入

request.get('https://www.dbmeinv.com/', function (err, res, body) {
    console.log(body);
    var $ = cheerio.load(body);
    var arr = [];
    $('img').each(function (index, item){
        arr.push($(item).attr('src'));
    });
    for(var i = 0; i < arr.length; i++){
        var item = arr[i];
        var nameArr = item.split('/');
        var name = nameArr[nameArr.length - 1];

        request.get(arr[i]).pipe(fs.createWriteStream(path.join(__dirname, '/allImage',name)));
    }
})