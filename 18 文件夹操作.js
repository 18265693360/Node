var fs = require('fs');



//判断是否存在
fs.exists('./我创建',function (result) {
    if (!result){
        fs.mkdir('./我创建', function (err) {
            if (err){
                console.log(err);
                return
            }
            console.log('创建成功');
        })
    } else{
        console.log('该文件夹已经存在');
    }
})



//创建一个目录
// fs.mkdir('./我创建',function (err) {
//    if (err){
//        console.log(err);
//        return
//    }
//     console.log('创建成功');
// });