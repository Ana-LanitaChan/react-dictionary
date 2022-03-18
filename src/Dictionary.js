import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [definition, setDefinition] = useState(null);
  let [loading, setLoading] = useState(false);
  let [photocall, setPhotocall] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePexResponse(response) {
    setPhotocall(response.data.photos);
  }

  function call() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexApiKey = "563492ad6f917000010000015a466f2735f849679b231a099ed07e15";
    let pexApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    const headers = { Authorization: `Bearer ${pexApiKey}` };
    return axios.get(pexApiUrl, { headers: headers }).then(handlePexResponse);
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
              defaultValue={props.defaultkeyword}
            />
            <input
              className="btn btn-primary submit-style"
              type="submit"
              value="Search"
              id="submit"
            />
          </div>
          <small className="">
            <em>Search for a definition. Ex: nugget, cat, etc.</em>
          </small>
        </form>
        <Definitions data={definition} />
        <Photos photos={photocall} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
