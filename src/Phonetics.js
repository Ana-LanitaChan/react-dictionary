import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props);
  const audio = <FontAwesomeIcon icon={faMusic} />;

  if (props.phonetics[0].audio === "") {
    return (
      <div className="Phonetics">Phonetics: {props.phonetics[0].text}</div>
    );
  } else {
    return (
      <div className="Phonetics">
        <a
          className="border bg-light rounded-circle"
          href={props.phonetics[0].audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          {audio}
        </a>
        {"  "}
        Phonetics: {props.phonetics[0].text}
      </div>
    );
  }
}
