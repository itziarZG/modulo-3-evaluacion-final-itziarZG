const Filters = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="section__filter" onSubmit={handleFormSubmit}>
      <label forhtml="name">
        Buscador:
        <input
          type="text"
          name="name"
          placeholder="¿a quién buscas?"
          value={props.value}
          onChange={handleFilter}
        ></input>
      </label>
    </form>
  );
};
export default Filters;
