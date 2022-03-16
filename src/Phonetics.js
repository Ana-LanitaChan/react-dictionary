import React from "react";

export default function Phonetics(props) {
  console.log(props);

  if (props.phonetics[0].audio === "") {
    return (
      <div className="Phonetics">Phonetics: {props.phonetics[0].text}</div>
    );
  } else {
    return (
      <div className="Phonetics">
        <a
          href={props.phonetics[0].audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>{" "}
        Phonetics: {props.phonetics[0].text}
      </div>
    );
  }
}
