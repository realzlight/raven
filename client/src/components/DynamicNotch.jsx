import { useEffect, useState, useRef } from "react";
import '../styles/DynamicNotch.css'

const message = [
  "Get to Know your Potential, with AI",
  "Ascend battle with others to claim 1#",
  "Top #1 is waiting for you",
  "Ascend or get left behind",
  "Are you Sure you are HTN?",
  "Discover Ascensions Peoples lile you!",
  "Get your facial percentage!",
  "DM's open, GC's poppin",
  "Ascension isn't a phase, it's a grind"
]
export default function DynamicNotch() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 600);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="land-notch" ref={textRef}>
      <span className={`notch-text ${visible? "show" : "hide"}`}>
        {messages[index]}
      </span>
    </div>
  );
}
