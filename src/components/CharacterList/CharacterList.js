import PropTypes from "prop-types";
import CharacterCard from "../CharacterCard/CharacterCard";
// import "./UserList.scss";

const CharacterList = (props) => {
  return (
    <section className="Characters">
      <ul className="Characters__list">
        {props.data.map((character) => {
          return (
            <li className="Characters__list-item" key={character.id}>
              <CharacterCard info={character} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterList;
