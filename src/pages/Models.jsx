import { useState } from "react";
import useFetchCars from "../hooks/useFetchCars";
import CarCard from "../components/CarCard";
import SectionTitle from "../components/SectionTitle";
import CarFilter from "../components/CarFilter";
import "../styles/models.css"
const Models = () => {
  const { cars, loading } = useFetchCars();

  const [filters, setFilters] = useState({
    search: "",
    price: "",
    range: "",
  });

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.model.toLowerCase().includes(filters.search.toLowerCase()) ||
      car.brand.toLowerCase().includes(filters.search.toLowerCase());

    const priceNumber = Number(car.price.replace(/[^0-9]/g, ""));
    const matchesPrice = filters.price
      ? priceNumber <= Number(filters.price)
      : true;

    const rangeNumber = Number(car.specs.range.replace(/[^0-9]/g, ""));
    const matchesRange = filters.range
      ? rangeNumber >= Number(filters.range)
      : true;

    return matchesSearch && matchesPrice && matchesRange;
  });

  if (loading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="container py-5">
      <SectionTitle
        title="All Models"
        subtitle="Use filters to find the perfect EV"
      />

      <CarFilter filters={filters} setFilters={setFilters} />

      <div className="row g-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.id} className="col-md-4 col-lg-3">
              <CarCard car={car} />
            </div>
          ))
        ) : (
          <h4 className="text-center py-5 text-muted">No cars found.</h4>
        )}
      </div>
    </div>
  );
};

export default Models;
