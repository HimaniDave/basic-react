import React from "react";
import "./Namecard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

export default function Namecard(props) {
  return (
    <a
      href={`${nameCheapUrl}${props.suggestedName}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="namecard-div">
        <p className="namecard-p" key={props.suggestedName}>
          {props.suggestedName}
        </p>
      </div>
    </a>
  );
}
