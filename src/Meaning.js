import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning.definitions);
  return (
    <div className="Meaning">
      <hr />
      <strong>{props.meaning.partOfSpeech}</strong>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {" "}
            <div>
              {definition.definition} <br /> <em>{definition.example} </em>{" "}
              <br /> <Synonyms synonyms={definition.synonyms} />{" "}
            </div>{" "}
            <br />
          </div>
        );
      })}
    </div>
  );
}
