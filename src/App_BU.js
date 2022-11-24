import { useState, useEffect } from "react";
import Data from "./text.json";


// 関数getRandX
// 関数getRandArgNum（テキストキーワード配列から取得する配列番号を生成する用）
// 関数getRandDuration（テキスト表示の速度用）
// 上記３つの意味合い用の関数
const getRand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


export default function App() {

  //state
  // 表示するテキスト配列
  const [renderingTexts, setRenderingTexts] = useState([{
    "text" : "",
    "x" : 0,
    "duration" : 0
  }])
  console.log("saisyo", renderingTexts)


  // 変数定義
  const rawTextsData = Data.data;//text.jsonからテキストキーワード配列を挿入
  const rawTextsDataLength = rawTextsData.length;//テキストキーワード配列の個数
  // const randX = "";//RandX※ランダムx座標



  useEffect(()=> {
    // ループ処理
    const RandArgNum = getRand(0, rawTextsDataLength); //getRandでランダム整数を生成してRandArgNumに挿入
    console.log("RandArgNum", RandArgNum)

    const currentRenderingText =  rawTextsData[RandArgNum];//テキストキーワード配列[ランダム整数]を取得
    console.log("currentRenderingText", currentRenderingText)


    const randDuration = getRand(1, 4); //getRandでランダム整数を生成してRandDurationに挿入
    console.log("randDuration", randDuration)
    
    const randX = getRand(0, 3000); //getRandでランダム整数を生成してRandXに挿入
    //   キーワード、座標、速度をjsonとして整形
    //   jsonを表示するテキスト配列にセット
    console.log("renderingTexts1", renderingTexts)

    if(!currentRenderingText){
      return
    }
    setRenderingTexts([...renderingTexts, {
      "text" : currentRenderingText,
      "x" : randX,
      "duration" : randDuration
    }])
    console.log("renderingTexts2", renderingTexts)
},[])




  // return
  //  配列がないときは表示しない
  //    表示する配列をmap
  //    配列.X座標に指定
  //    配列.速度をhtmlに指定
  //    配列.テキストキーワードhtmlに指定
  return (
    <div className="App">
      {!renderingTexts === []?
        renderingTexts.forEach((renderingText, index)=>{
          <div>
            {renderingText[index].text.text}
          </div>
        })
        :"aaa"
      }
    </div>
  );





}//App
