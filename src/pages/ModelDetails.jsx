import { useParams, Link } from "react-router-dom";
import useFetchCars from "../hooks/useFetchCars";
import "../styles/modelDetails.css";

const ModelDetails = () => {
  const { id } = useParams();
  const { cars, loading } = useFetchCars();

  if (loading) return <h3 className="text-center py-5">Loading...</h3>;

  const car = cars.find((c) => c.id === Number(id));

  if (!car)
    return (
      <h2 className="text-center py-5 text-danger">Car not found.</h2>
    );

  return (
    <div className="model-details-container">
      <div className="back-button">
        <Link to="/models" className="back-link">
          ← Back to Models
        </Link>
      </div>

      <div className="details-row">
        <div className="image-col">
          <img
            src={car.image}
            alt={car.model}
            className="car-image"
          />
        </div>

        <div className="details-col">
          <h1 className="car-title">{car.brand} {car.model}</h1>
          <h4 className="car-price">{car.price}</h4>

          <div className="specs-container">
            <div className="spec-box">
              <h5>Range</h5>
              <p>{car.specs.range}</p>
            </div>
            <div className="spec-box">
              <h5>Top Speed</h5>
              <p>{car.specs.top_speed}</p>
            </div>
            <div className="spec-box">
              <h5>0–100 Acceleration</h5>
              <p>{car.specs.acceleration}</p>
            </div>
          </div>

          <div className="description-section">
            <h3>About the {car.model}</h3>
            <p>{car.description}</p>
          </div>

          <Link to="/enquire" className="enquire-btn">
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
