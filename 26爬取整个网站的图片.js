//运用 cheerio 爬取  git 上也有 cheerio
//局部安装直接 yarn add 包名

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');

/*
* 1.第一步爬取HTML
* 2.用cheerio读取爬回来的html
* 3.用jquery得到所有的img
* 4.将img的src得到
* 5.遍历所有的src 爬取图片的数据 并写入
* */

request.get('https://www.dbmeinv.com', function (err, res, body) {
    console.log(body);
    var $ = cheerio.load(body);
    var arr = [];
                            //index索引值 item原生dome对象
    $('img').each(function (index, item) {
        //将原生dome对象转化成jQ对象 才能用JQ方法获取src
        // console.log($(item).attr('src'));

        arr.push($(item).attr('src'));
    });
    //操作src
    for (var i = 0; i<arr.length; i++){
        var item = arr[i];
        //字符串转数组 split
        var nameArr = item.split('/');
        //获取数组最后一项
        var name = nameArr[nameArr.length - 1];

                                                                 //绝对路径
       request.get(arr[i]).pipe(fs.createWriteStream(path.join(__dirname, 'AllImage', name)));

       //错误处理 出现no such directory,open
       //  Error: ENOENT: no such file or directory, open '/Users/wangzewang/untitled5/Node/allImage/0060lm7Tgy1g4b3d3bwnlj30ku0rswid.jpg'

        //解决方法 创建一个相关名字的目录
    }
});








