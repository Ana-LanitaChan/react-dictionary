import React from "react";
import Meaning from "./Meaning";

export default function Definitions(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Definitions">
        {" "}
        <h5>{props.data.word}</h5>
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
