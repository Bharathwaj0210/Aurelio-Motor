import { useState, useEffect } from "react";
import { getAllCars } from "../services/carService";

export default function useFetchCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCars = () => {
      setLoading(true);

      setTimeout(() => {
        const data = getAllCars();
        setCars(data);
        setLoading(false);
      }, 400); 
    };

    loadCars();
  }, []);

  return { cars, loading };
}
