import React from "react";
import Namecard from "../Namecard/Namecard";
import "./ResultContainer.css";

const ResultContainer = (props) => {
  const names = props.suggestedNames.map(function (suggestedName) {
    return (
      <div>
        <Namecard key={props.suggestedName} suggestedName={suggestedName} />
      </div>
    );
  });

  return <div className="result-container">{names}</div>;
};

export default ResultContainer;
