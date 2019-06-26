var fs = require('fs');
var path = require('path');


                      //绝对路径
console.log(path.join(__dirname, '/index1.html'));
fs.readFile(path.join(__dirname, '/index1.html'),function (err, data) {
   if (err){
       console.log(err);
       return
   }
    console.log(data);
});