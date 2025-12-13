import { Link } from "react-router-dom";
import "../styles/carCard.css"; 

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img
        src={car.image}
        alt={car.model}
        className="car-card-img"
      />

      <div className="car-card-body">
        <h5 className="car-card-title">
          {car.brand} {car.model}
        </h5>

        <p className="car-card-price">{car.price}</p>

        <Link to={`/models/${car.id}`} className="car-card-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
