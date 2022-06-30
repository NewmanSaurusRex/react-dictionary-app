import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
  }

  //note:https://dictionaryapi.dev/ documentation for reference//
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

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
      <Results results={results} />
    </div>
  );
}
