const axios = require("axios");

async function getRaceData() {
  console.log("レース情報取得中...");

  // 仮のAPI（あとで本番データ接続可能）
  const raceData = {
    place: "平和島",
    race: "5R",
    prediction: "3-2-5",
    confidence: "★★★★☆"
  };

  sendLINE(raceData);
}

async function sendLINE(data) {
  console.log("LINE送信:", data);
}

// 1時間ごとに実行
setInterval(getRaceData, 60 * 60 * 1000);

console.log("BoatRace AI クラウド起動");
