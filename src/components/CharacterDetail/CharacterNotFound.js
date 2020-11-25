import React from "react";
import { Link } from "react-router-dom";
import "./CharacterDetail.scss";
import Logo from "../../images/Rick_and_Morty_-_logo_(English).png";

function CharacterNotFound() {
  return (
    <div className="detail">
      <img className="detail__title" src={Logo} alt="Logo Rick and Morty"></img>
      <div className="detail__card">
        <Link to="/" className="detail__card__button">
          {"< "}
          Volver{" "}
        </Link>
        <div className="detail__character">
          <h3 className="detail__card--title">Character Not Found</h3>
        </div>
      </div>
    </div>
  );
}
export default CharacterNotFound;
