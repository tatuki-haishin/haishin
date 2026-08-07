function omikuji() {

    const results = [
        "🌸 大吉！今日は最高の日！",
        "🎉 中吉！楽しいことが起きそう！",
        "😊 小吉！ゆっくり頑張ろう！",
        "⭐ 吉！良い出会いがありそう！",
        "💤 末吉！焦らず進もう！",
        "💦 凶！今日は慎重に行動しよう！",
        "😭 大凶！気を引き締めよう！",
        "😐 たつ吉！今日は配信を見に行こう！"

    ];


    const random = Math.floor(Math.random() * results.length);


    document.getElementById("result").textContent = results[random];

}