// for (var i=1; i<=9;i++){
//     //每一行都打印
//     var str = "";
//     for (var j=1; j<=i; j++){
//         str += j + "*" + i + "=" + i*j + " ";
//     }
//     console.log(str);
// }

//行 i  列 j   列*行
for (var i=1; i<=9; i++){
    //每一行都打印 所以有空字符串
    var str = "";
    for(var j=1; j<=i; j++){
        str += j + "*" + i + "=" + j*i + " ";
    }
    console.log(str);
}