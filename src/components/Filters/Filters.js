import "./Filters.scss";
import PropTypes from "prop-types";

const Filters = (props) => {
  //lifting with input value
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };

  //prevent reload
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="section__filter" onSubmit={handleFormSubmit}>
      <input
        className="section__filter__input"
        type="text"
        name="name"
        placeholder="¿a quién buscas?"
        value={props.value}
        onChange={handleFilter}
      ></input>
    </form>
  );
};

Filters.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Filters;
