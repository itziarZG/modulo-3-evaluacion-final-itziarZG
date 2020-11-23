const Filters = (props) => {
  const handleFilter = (ev) => {
    console.log(ev.target.value);
    props.handleFilter(ev.target.value);
  };
  return (
    <form className="section__filter">
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
