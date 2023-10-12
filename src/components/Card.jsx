import PropTypes from "prop-types";
import "../assets/styles/card.css";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h2>{props.price}</h2>
      <button>{props.category}</button>
    </div>
  );
}

Card.propTypes = {
  props.title: PropTypes.string.isRequired,
  props.description: PropTypes.string.isRequired,
  props.price: PropTypes.number.isRequired,
  props.image: PropTypes.string.isRequired,
  props.category: PropTypes.string.isRequired,
};

export default Card;
