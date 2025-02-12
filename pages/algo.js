import React, { useState, useEffect } from "react";

const Timer = () => {

  const [count, setCount] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(()=>{

    let interval;
    if(running && count > 0){
      interval = setInterval(()=>{
        setCount((prevCount)=> (prevCount > 0 ?  prevCount - 1 : 0))
      },1000)
    }
    else if( count === 0){
      setRunning(false)
      setTimeout(()=>{
        alert("adsdas")
      },1000)
    }

    return ()=> clearInterval(interval)
  }, [count, running])

  const startTimer =()=>{
    setCount(5);
    setRunning(true)
  }

  return (
    <div>
       <h1>{count}</h1>
       <button onClick={startTimer}>Start Timer</button>
    </div>
  );
};

export default Timer;
