import "./Filters.scss";

const Filters = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };

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
export default Filters;
