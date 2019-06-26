var fs = require('fs');

// var str = "我要写入一段话";
// var str = "我要写入第二段话";
var str = "追加一句话";

// fs.writeFile('./demo.txt', str, function (err) {
//      if (err){
//          console.log(err);
//          return
//      }
//     console.log('写入成功');
// });

// var cb = fs.writeFileSync('./demo.txt', str);
// console.log(cb);

//=======追加式的写文件
fs.appendFile('./demo.text', str, function (err) {
    if (err){
        console.log(err);
        return
    }
    console.log('追加成功');
});