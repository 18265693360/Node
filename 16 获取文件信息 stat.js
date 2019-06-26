var fs = require('fs');

// fs.stat('./16demo1.txt', function (err, data) {
//     if (err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })

fs.stat('./16ddd', function (err, data) {
    if (err){
        console.log(err);
        return
    }
    console.log(data);
})

// mode: 33188, 证明是不是文件夹