import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

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
              {definition.definition} <br />{" "}
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />{" "}
            </div>{" "}
            <br />
          </div>
        );
      })}
    </div>
  );
}
