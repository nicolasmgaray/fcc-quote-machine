import React from "react";
import SocialShare from "../SocialShare";
import TextTransition, { presets } from "react-text-transition";
import "./styles.css";

const QuoteBox = ({ quote, changeQuote }) => {
  const { quote: text, author } = quote;

  return (
    <div id="quote-box">
      <div id="text">
        <i className="fas fa-quote-left"></i>
        <TextTransition text={text} springConfig={presets.gentle} />
      </div>
      <div id="author">
        <TextTransition text={author} springConfig={presets.gentle} />
      </div>
      <div className="buttonBar">
        <SocialShare
          hashtag={"quote"}
          text={encodeURIComponent('"' + text + '" ' + author)}
        />
        <button id="new-quote" onClick={changeQuote}>
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
