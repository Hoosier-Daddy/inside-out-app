import "./styles.css";
import { useState } from "react";

let emojiDictionary = {
  // smile: "😃",
  // disbelief: "disbelief",
  // sad: "sadness",
  // food: "takeaway",
  // love: "love",
  // annoy: "annoyance"
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    let inputValue = event.target.value;
    let keyValue = emojiDictionary[inputValue];
    if (keyValue === "") {
      setMeaning("Value not in database");
    }
    setMeaning(keyValue);
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>inside outtt!</h1>
      <input onChange={inputChangeHandler} />
      <h2>{meaning}</h2>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
