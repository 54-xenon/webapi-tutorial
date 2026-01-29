// exporess(モジュールの読み込み)
const express = require('express');
// 変数appに代入している
const app = express();
// 使用するポート番号の指定 -> 3000番、8080番がよく使われる
const port = 8080;

const now = new Date;
const year = now.getFullYear();

// データを格納しておく配列
const quotesList = [
    {
        index: 0,
        quote: "もし今日が人生最後の日だとしたら、今やろうとしていることは本当に自分のやりたいことだろうか？",
        author: {
            name: "スティーブ・ジョブズ",
            overview: "アップル社の創業者。革新的な製品を世に送り出した",
            born: 1955,
            died: 2011,
        }
    },

    {
        index: 1,
        quote: "日本人は、失敗ということを恐れすぎるようである。どだい、失敗を恐れて何もしないなんて人間は、最低なのである。",
        author: {
            name: "本田宗一郎",
            overview: "日本の実業家、技術者、ホンダの創業者",
            born: 1906,
            died: 1991,
        }
    },

    {
        index: 2,
        quote: "自分で薪を割れ、二重に温まる。",
        author: {
            name: "ヘンリー・フォード",
            overview: "米国の実業家、フォード・モーター創業者",
            born: 1863,
            died: 1947,
        }
    },

    {
        index: 3,
        quote: "もうこれで満足だという時は、すなわち衰える時である。",
        author: {
            name: "渋沢栄一",
            overview: "日本の武士、官僚、実業家、日本資本主義の父",
            born: 1840,
            died: 1931,
        }
    },

    {
        index: 4,
        quote: "問題は未来だ。だから私は、過去を振り返らない。",
        author: {
            name: "ビル・ゲイツ",
            overview: "米国の実業家、マイクロソフト社の創業者",
            born: 1879,
            died: year,
        }
    },

    {
        index: 5,
        quote: "とにかく、考えてみることである。工夫してみることである。そして、やってみることである。失敗すればやり直せばいい。",
        author: {
            name: "松下幸之助",
            overview: "日本の実業家、発明家、パナソニック創業者",
            born: 1955,
            died: year,
        }
    },

    {
        index: 6,
        quote: "失敗なんてひとつの選択肢にすぎない。失敗することがなかったら、どうしてイノベーションを起こせるだろう？",
        author: {
            name: "イーロン・マスク",
            overview: "南アフリカ出身の起業家。PayPal、Tesla、SpaceXを創業。OpenAIの共同創業者でもあった。",
            born: 1971,
            died: year,
        }
    },

];


// 指定のポートで開く
app.listen(port, () => {
    console.log(`繋がったよ:http://localhost:${port}`)
});

app.get('/',(req, res) => {
    res.send('偉人の名言をresponsするwebAPIです');
});

// getメソッド
    // 名言を返すメソッド
app.get('/quotes/:id', (req, res) => {
    // 1. URLからidの値を取得する
    const id = Number(req.params.id);
    // 2. quotesListの名から、indexがidと一致するデータを探す
    const quote = quotesList.find(item => item.index === id);
    // 3. 発見できた場合は、json形式で返す
    if (quote) {
        res.json(quote);
    } else {
        res.status(404).json({
            message: '指定されたidは存在しません',
        });
    }
});