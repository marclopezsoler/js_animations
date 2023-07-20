import { useEffect, useState } from "react";
import "./Button.scss";

function Button() {
  const [buttonText, setButtonText] = useState("HOVER ME");
  const [buttonClass, setButtonClass] = useState(false);
  const [remainingTime, setRemainingTime] = useState(5000);

  const handleHover = () => {
    setButtonText("START TIMER");
  };

  const handleMouseLeave = () => {
    setButtonText("HOVER ME");
  };

  const buttonCliked = () => {
    setButtonClass(true);
  };

  useEffect(() => {
    if (buttonClass) {
      const timer = setTimeout(() => {
        setButtonClass(false);
        setRemainingTime(5000);
      }, remainingTime);

      const interval = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(prevTime - 1000, 0));
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    } else{
      setRemainingTime(5000);
    }
  }, [buttonClass, remainingTime]);

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    return `${seconds} second(s)`;
  };

  return (
    <section>
      <div
        className={`button_parent ${buttonClass ? "move_out" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={buttonCliked}
        href="google.com"
      >
        <p>{buttonText}</p>
      </div>
      <div>
        <span>
          Wait a total of{" "}
          <p className="total_Time">{formatTime(remainingTime)}</p> until the
          button appears again.
        </span>
      </div>
    </section>
  );
}

export default Button;
