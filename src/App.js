import Data from "./text.json";
import { useEffect, useState, useRef } from "react";

const useAnimationFrame = (callback = () => {}) => {
  const reqIdRef = useRef();
  const loop = () => {
    reqIdRef.current = requestAnimationFrame(loop);
    callback()
  };

  useEffect(() => {
    reqIdRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, []);
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function App() {
  const [text, setText] = useState([]);

  const textWordLength = Data.data.length;
  const randNum = getRandomInt(0, textWordLength)
  console.log("randNum", randNum)
  
  useAnimationFrame(() => {
    setText("bbb");
  });

  return (
    <div className="App">
      <div>{text}</div>
    </div>
  );
}
