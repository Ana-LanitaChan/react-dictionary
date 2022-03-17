import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning.definitions);
  return (
    <div className="Meaning mt-3 bg-light border p-5" id="cardborder">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {" "}
            <div>
              {definition.definition}
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </div>{" "}
            <hr />
          </div>
        );
      })}
    </div>
  );
}
