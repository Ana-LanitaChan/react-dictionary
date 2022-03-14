import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for "${keyword}"`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <form action="search" className="mb-3" id="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="form-control border"
          type="search"
          placeholder="Search for a definition"
          id="input-search"
          onChange={handleKeyword}
        />
        <input
          className="btn btn-primary submit-style"
          type="submit"
          value="Search"
          id="submit"
        />
      </div>
    </form>
  );
}
