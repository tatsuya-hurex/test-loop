import {useState, useEffect } from 'react';

const yobiText = [
  {id: 1, text: "aaa"},
  {id: 2, text: "bbb"},
  {id: 3, text: "ccc"},
  {id: 5, text: "eee"},
  {id: 6, text: "fff"},
  {id: 7, text: "ggg"},
]

//ランダム整数の生成関数
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//配列の数
const argLength = yobiText.length;

function App() {
  const [words, setWords] = useState([]);
  const [timer, setTimer] = useState(false);


  //秒間処理
  const secFun = () => {
    const randomNum = getRandomInt(0,argLength)
    const newWords = [...words, yobiText[randomNum]]
    // const newWords = [...words, {id: 4, text: "ddd"}] //スプレッド構文で展開して追加
    setWords(newWords)
  }


  useEffect(() => {
    setTimer(true)

  },[])

  useEffect(() => {
    if (timer) {
      const timerId = setInterval(secFun, 1000);
      return () => clearInterval(timerId);
    }
  }, [timer]);

  return (
    <div>
      <h2>My Timer</h2>
      <div>{words.map((text)=> (
        <p key={text.id}>
        {text.text}
        </p>
      ))}</div>
      <button onClick={() => setTimer(true)}>スタート</button>
      <button onClick={() => setTimer(false)}>ストップ</button>
    </div>
  );
}

export default App;