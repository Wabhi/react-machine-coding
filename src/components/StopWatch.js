import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive((prev)=>!prev);
  };

  const handleStop = () => {
    setIsActive(false);
    setTime(0);
  };

  const timeFormate =(time)=>{
    const hrs = Math.floor(time/3600).toString().padStart(2,'0')
    const min = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${hrs} :: ${min} :: ${sec}`
  }

  return (
    <>
      <h1>{timeFormate(time)}</h1>
      <button onClick={handleStart}>START</button>
      <button onClick={handlePause}>PAUSE</button>
      <button onClick={handleStop}>STOP</button>
    </>
  );
};

export default StopWatch;
