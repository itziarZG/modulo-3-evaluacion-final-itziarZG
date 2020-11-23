import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const { name, id, image, species } = props.info;

  return (
    <li className="item__card">
      <Link
        to={`/detail/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          className="item__card--img"
          src={image}
          alt={`Foto de ${name}`}
          title={`Foto de ${name}`}
        />
        <div>
          <h4 className="item__card--title">{name}</h4>
          <p className="item__card--description">{species}</p>
        </div>
      </Link>
    </li>
  );
};

CharacterCard.propTypes = {
  /* handleFilter: PropTypes.func.isRequired, */
  info: PropTypes.object.isRequired,
};

export default CharacterCard;
