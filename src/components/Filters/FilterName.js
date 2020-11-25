import "./Filters.scss";
import PropTypes from "prop-types";

const FilterName = (props) => {
  //lifting with input value
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };

  return (
    <input
      className="section__filter__input"
      type="text"
      name="name"
      placeholder="¿a quién buscas?"
      value={props.value}
      onChange={handleFilter}
    ></input>
  );
};

FilterName.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterName;
