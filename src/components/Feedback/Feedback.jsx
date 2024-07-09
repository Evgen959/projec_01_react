import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [countLike, setLikeCount] = useState(0);
  const onLikeClick = () => {
    setLikeCount((prevValue) => prevValue + 1);
  };
  const [countDislike, setDislikeCount] = useState(0);
  const onDislikeClick = () => {
    setDislikeCount((prevValue) => prevValue + 1);
  };
    const onResetResults = () => {
        
    };


  return (
    <div className="feedback-component">
      <div>
        <Button name="Like"  onButtonClick={onLikeClick}/>
      </div>
      <div>{countLike}</div>
      <div>
        <Button name="Dislike" onButtonClick={onDislikeClick}/>
      </div>
      <div>{countDislike}</div>
      <div>
        <Button name="Reset Results" onButtonClick={onResetResults}/>
      </div>
    </div>
  );
}

export default Feedback;
