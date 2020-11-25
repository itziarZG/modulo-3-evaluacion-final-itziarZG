import "./Filters.scss";
import PropTypes from "prop-types";
import React from "react";

const FilterSort = (props) => {
  function handleChange(ev) {
    props.handleFilterSort(ev.target.checked);
  }
  return (
    <div className="section__filter__sort">
      <input type="checkbox" name="sort" onChange={handleChange}></input>
      <label className="section__filter__label">Sort by Name</label>
    </div>
  );
};

FilterSort.propTypes = {
  handleFilterSort: PropTypes.func.isRequired,
};

export default FilterSort;
