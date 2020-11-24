import React from "react";

import "./CharacterNotFound.scss";

const CharacterNotFound = (props) => {
  console.log("not foudn");
  return <div className="popup">{props.children}</div>;
};
export default CharacterNotFound;
