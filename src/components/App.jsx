import React from "react";
import EmojiEntry from "./EmojiEntry.jsx";
import emojipedia from "../emojipedia.js";

function createEmojiEntry(e) {
  return (
    <EmojiEntry
      key={e.id}
      emoji={e.emoji}
      emojiName={e.name}
      description={e.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmojiEntry)}</dl>
    </div>
  );
}

export default App;
