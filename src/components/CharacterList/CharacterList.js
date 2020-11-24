import PropTypes from "prop-types";
import CharacterCard from "../CharacterCard/CharacterCard";
import FilterEmpty from "../Filters/FilterEmtpy";
import "./CharacterList.scss";

const CharacterList = (props) => {
  //array can be empty if there's no character with that name.
  let ListIsEmpty = false;
  if (props.data.length === 0) {
    ListIsEmpty = true;
  }
  return ListIsEmpty ? (
    <FilterEmpty />
  ) : (
    <section className="section-Characters">
      <ul className="section-Characters__list">
        {props.data.map((character) => {
          return (
            <li className="section-Characters__list__card" key={character.id}>
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
