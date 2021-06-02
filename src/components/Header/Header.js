import React from "react";
import "./header.css";
import "../app.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.name}</h1>
      <br></br>
      <img
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="#"
        className={`head-image ${
          props.imgExpanded ? "head-image-expanded" : "head-image-contracted"
        }`}
      ></img>
    </div>
  );
};

export default Header;
