import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Definitions(props) {
  if (props.data) {
    return (
      <div className="Definitions">
        {" "}
        <h5>{props.data.word}</h5>
        <Phonetics phonetics={props.data.phonetics} />
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
