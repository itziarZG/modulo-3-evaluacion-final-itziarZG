import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import ModalCard from "./ModalCard";
const CharacterDetail = (props) => {
  const { episodes, origin, status, name, id, image, species } = props.info;
  return (
    <article className="detail__card">
      <Link to="./" style={{ textDecoration: "none", color: "inherit" }}>
        {" "}
        Volver{" "}
      </Link>
      <img
        className="detail__card--img"
        src={image}
        alt={`Foto de ${name}`}
        title={`Foto de ${name}`}
      />
      <div>
        <h4 className="detail__card--title">{name}</h4>
        <ul className="detail__card--info">
          <li className="detail__card--li">{status}</li>
          <li className="detail__card--li">{species}</li>
          <li className="detail__card--li">{origin}</li>
          <li className="detail__card--li">{episodes}</li>
        </ul>
      </div>
    </article>
  );
};

CharacterDetail.propTypes = {
  /* handleFilter: PropTypes.func.isRequired, */
  info: PropTypes.object.isRequired,
};

export default CharacterDetail;
