import React, { useState } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState(props.rating || 2);
  const [limit, setLimit] = useState(props.limit || 5);

  const handleClick = (e) => {
    console.log(e.target.getAttribute('data'))
    setRating(+e.target.getAttribute("data"));
  };
  return (
    <div onClick={handleClick}>
      {[...new Array(limit).keys()].map((i) => {
       return (
         <span
          key={i}
          className={i < rating ? "star rated" : "star"}
          data={i + 1}
        ></span>
       )
      })}
    </div>
  );
};

export default StarRating;
