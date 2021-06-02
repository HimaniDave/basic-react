import React from "react";
import "./searchbox.css";

const SearchBox = (props) => {
  return (
    <div className="search-container">
      <input
        onChange={(event) => props.outputChange(event.target.value)}
        placeholder="Type your keywords"
        className="search-box"
      ></input>
    </div>
  );
};

export default SearchBox;
