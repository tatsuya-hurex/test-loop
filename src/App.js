import {useState, useEffect } from 'react';



function App() {
  const [count, setCount] = useState(0);
  const [words, setWords] = useState([
    {id: 1, text: "aaa"},
    {id:2, text: "bbb"},
    {id:3, text: "ccc"},
  ]);
  const [timer, setTimer] = useState(false);

  const countup = () => {
    setCount(count => count + 1);
  };

  const addText = () => {
    const newWords = [...words, {id: 4, text: "ddd"}]
    console.log(newWords)
    setWords(newWords)
    console.log(words)
  }

  useEffect(() => {
    if (timer) {
      const timerId = setInterval(addText, 1000);
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
      <button onClick={() => setCount(0)}>リセット</button>
    </div>
  );
}

export default App;