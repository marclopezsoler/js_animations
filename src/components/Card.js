import { useState } from "react";
import "./Card.scss";
import LargeImage from "./LargeImage";

function Card({ url, name }) {
  const [showImage, setShowImage] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleHover = () => {
    setShowImage(true);
  };

  const handleExit = () => {
    setShowImage(false);
  };

  const mouseMove = (event) => {
   const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <div
      className="card_parent"
      onMouseEnter={handleHover}
      onMouseLeave={handleExit}
      onMouseMove={(event) => mouseMove(event)}
    >
      <div className="card">
        <img src={url} />
        <h2>{name.toUpperCase()}</h2>
        {showImage && <LargeImage url={url} cursorPos={mousePos}/>}
      </div>
    </div>
  );
}

export default Card;
