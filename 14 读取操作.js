var fs = require('fs');


//异步  有回调函数的不会执行 等同步或没有回调函数的执行完 再执行完

fs.readFile('./14.txt', 'utf-8', function (err, data) {
            //./14txt 在最大的目录下
    if (err){
        console.log(err);
        return
    }
    console.log(data,'读取成功');
});

// var str = fs.readFileSync('./14.txt', 'utf-8');
// console.log(str);