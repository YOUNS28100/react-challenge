import PropTypes from "prop-types";
import "../assets/styles/card.css";

function Card({ title, description, price, image, category }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>{price}</h2>
      <button>{category}</button>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Card;
