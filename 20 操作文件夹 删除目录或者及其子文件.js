var fs = require('fs');

function deleteDir(path) {
    //读取想要删除的文件
    var arr = fs.readdirSync(path);
    //遍历目录下的文件
    for (var i=0; i<arr.length; i++){
        var result =fs.statSync(path + '/' + arr[i])
        if (result.mode == 16822){//判断是否是一个文件
            var deepPath = path + '/' + arr[i];
            deleteDir(deepPath)
        } else {
            // console.log(path + '/' + arr[i]);
            fs.unlinkSync(path + '/' + arr[i]);
        }
    }
    //确保上面都删除完了就可以删除最大的目录
    fs.rmdirSync(path);
}