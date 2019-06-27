//git  有个 request模块请求客户端
var request = require('request');
//拿到目标地址才能爬
var address = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561563541434&di=571ef08be3c24beb3f0edbd8f176efe7&imgtype=0&src=http%3A%2F%2Fstatic.haibao.cn%2Fimg%2F600_0_100_1%2F1433564258.2401%2Fb4d97aea902c5e4293526cd964a10b48.jpg';
var fs = require('fs');

// request.get(address, function (err,res,body) {
//     console.log(body);
    //上面已经拿到图片的二进制码 需要写入图片中  encoding:'binary'二进制
    // fs.writeFile('01.jpg',body,{encoding:'binary'}, function (err) {
    //     if(err){
    //         console.log(err);
    //         return
    //     }
    //     console.log('图片爬取成功');
    // })
// });

//运用pipe       数据未经任何加工  进入 创建一个写入流
request.get(address).pipe(fs.createWriteStream('01.jpg'));