import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for "${keyword}"`);
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
