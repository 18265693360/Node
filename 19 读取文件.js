var fs = require('fs');

// fs.readdir('./', function (err,data) {
//     if (err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })

fs.rmdir('./我创建', function (err) {
    if (err){
        console.log(err);
        return
    }
    console.log('删除成功');
});


//删除文件夹中有文件夹的
function deleteDir(path) {
    fs.readir(path, function (err, data) {
        if(err){
            console.log(err);
            return
        }
        //遍历目录下的文件
        for(var i =0; i<data.length; i++){
            var deepPath = path + '/' + data[i];
                                   //资源路径 path+'/'+data[i]
            var fileMsg = fs.statSync(deepPath);
            //判断是文件还是文件夹
            if (fileMsg.mode == '16822'){//文件夹
                deleteDir(deepPath);
            }else {
                fs.unlike(deepPath, function (err) {//删除文件
                    if (err){
                        console.log('文件删除失败');
                        console.log(err);
                        return
                    }
                    console.log('成功删除文件 + deepPath');//后面是文件名
                })
            }
        }
    })
}
deleteDir('./我的文件夹')

