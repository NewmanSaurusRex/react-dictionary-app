import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`You are searching for ${keyword}...`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input
          type="search"
          className="form-control"
          placeholder="Enter a word..."
          autoFocus="on"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
