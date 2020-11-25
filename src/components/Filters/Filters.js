import "./Filters.scss";
import PropTypes from "prop-types";
import FilterName from "./FilterName";
import FilterSort from "./FilterSort";
import React from "react";

const Filters = (props) => {
  //prevent reload
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <React.Fragment>
      <form className="section__filter" onSubmit={handleFormSubmit}>
        <FilterName value={props.value} handleFilter={props.handleFilter} />
        <FilterSort
          handleFilterSort={props.handleFilterSort}
          checked={props.checked}
        />
      </form>
    </React.Fragment>
  );
};

Filters.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleFilter: PropTypes.func.isRequired,
  handleFilterSort: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Filters;
