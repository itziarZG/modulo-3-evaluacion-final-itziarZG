import PropTypes from "prop-types";
import CharacterCard from "../CharacterCard/CharacterCard";
import FilterEmpty from "../Filters/FilterEmtpy";
// import "./UserList.scss";

const CharacterList = (props) => {
  let isEmpty = false;
  if (props.data.length === 0) {
    isEmpty = true;
  }
  console.log("is empty", isEmpty);
  return isEmpty ? (
    <FilterEmpty />
  ) : (
    <section className="Characters">
      <ul className="Characters__list">
        {props.data.map((character) => {
          return (
            <li className="Characters__list__card" key={character.id}>
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
