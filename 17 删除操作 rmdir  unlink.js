var fs = require('fs');

fs.unlink('./demo.text', function (err) {
    if (err){
        console.log(err);
        return
    }
    console.log('删除成功');
})