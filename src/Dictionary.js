import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [definition, setDefinition] = useState(null);
  let [loading, setLoading] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function call() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    call();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoading(true);
    call();
  }

  if (loading) {
    return (
      <div className="Dictionary">
        <form
          action="search"
          className="mb-3"
          id="form"
          onSubmit={handleSubmit}
        >
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
        <Definitions data={definition} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
