// exporess(モジュールの読み込み)
const express = require('express');
// 変数appに代入している
const app = express();
// 使用するポート番号の指定 -> 3000番、8080番がよく使われる
const port = 8080;


// 指定のポートで開く
app.listen(port, () => {
    console.log(`繋がったよ:http://localhost:${port}`)
});

app.get('/',(req, res) => {
    res.send('Hello World!');
});