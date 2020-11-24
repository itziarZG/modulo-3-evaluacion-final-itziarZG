import PropTypes from "prop-types";

function Details(props) {
  const { episodes, origin, status, name, id, image, species } = props.info;
  return (
    <div className="detail__character">
      <img
        className="detail__character--img"
        src={image}
        alt={`Foto de ${name}`}
        title={`Foto de ${name}`}
      />
      <div className="detail__character--texts">
        <h3 className="detail__card--title">{name}</h3>
        <ul>
          <li>
            <span className="bold">Status: </span>
            {status}
          </li>
          <li>
            <span className="bold">Species: </span>
            {species}
          </li>
          <li>
            <span className="bold">Origin: </span>
            {origin}
          </li>
          <li>
            <span className="bold">Episodes: </span>
            {episodes}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Details;

Details.propTypes = {
  info: PropTypes.object,
};
