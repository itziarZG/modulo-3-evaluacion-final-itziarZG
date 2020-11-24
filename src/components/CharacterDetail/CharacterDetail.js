import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CharacterDetail.scss";
import Logo from "../../images/Rick_and_Morty_-_logo_(English).png";
import Details from "./Details.js";
import CharacterNotFound from "./CharacterNotFound";

const CharacterDetail = (props) => {
  console.log(props.info);

  return (
    <article className="detail">
      <img className="detail__title" src={Logo} alt="Logo Rick and Morty"></img>
      <div className="detail__card">
        <Link to="./" className="detail__card__button">
          {"< "}
          Volver{" "}
        </Link>
        {!!props.info ? (
          <Details info={props.info} />
        ) : (
          <CharacterNotFound text="Character not Found" />
        )}
      </div>
    </article>
  );
};

CharacterDetail.propTypes = {
  /* handleFilter: PropTypes.func.isRequired, */
  info: PropTypes.object.isRequired,
};

export default CharacterDetail;
