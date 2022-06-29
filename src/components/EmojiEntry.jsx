import React from "react";

function EmojiEntry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.emojiName}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default EmojiEntry;
