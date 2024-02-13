import React, { useEffect, useState } from "react";
import { imageList } from "../imageList";

const ImageCrousal = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevButton = () => {
    if (currentImage === 0) {
      setCurrentImage(imageList.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };

  const handleNextButton = () => {
    if (currentImage === imageList.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };

  useEffect(()=>{
    const timer = setInterval(()=>{
      handleNextButton()
    },3000)
    return()=> clearInterval(timer)
  },[currentImage])

  return (
    <div>
      <button onClick={handlePrevButton}>PREV-BUTTON</button>
      <div style={{ border: "1px solid crimson" }}>
        <img
          src={imageList[currentImage].url}
          alt=""
          width="350px"
          height="450px"
        />
        <p>{imageList[currentImage].title}</p>
      </div>
      <button onClick={handleNextButton}>NEXT-BUTTON</button>
    </div>
  );
};

export default ImageCrousal;
