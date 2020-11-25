import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CharacterDetail.scss";
import Logo from "../../images/Rick_and_Morty_-_logo_(English).png";
import deadLogo from "../../images/dead.jpg";

const CharacterDetail = (props) => {
  const { episodes, origin, status, name, image, species } = props.info;
  return (
    <article className="detail">
      <img className="detail__title" src={Logo} alt="Logo Rick and Morty"></img>
      <div className="detail__card">
        <Link to="/" className="detail__card__button">
          {"< "}
          Volver{" "}
        </Link>
        <div className="detail__character">
          <img
            className="detail__character--img"
            src={image}
            alt={`Foto de ${name}`}
            title={`Foto de ${name}`}
          />
          <div className="detail__character--texts">
            <h3 className="detail__card--title">{name}</h3>
            <ul>
              <li>
                <span className="bold">Status: </span>
                {status === "Alive" ? (
                  "Alive"
                ) : (
                  <img className="detail__card--dead" src={deadLogo}></img>
                )}
              </li>
              <li>
                <span className="bold">Species: </span>
                {species}
              </li>
              <li>
                <span className="bold">Origin: </span>
                {origin}
              </li>
              <li>
                <span className="bold">Episodes: </span>
                {episodes}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

CharacterDetail.propTypes = {
  info: PropTypes.object,
};

export default CharacterDetail;
