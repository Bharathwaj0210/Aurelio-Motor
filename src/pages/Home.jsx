import HeroSection from "../components/HeroSection";
import CarCard from "../components/CarCard";
import useFetchCars from "../hooks/useFetchCars";
import Loader from "../components/Loader";

export default function Home() {
  const { cars, loading } = useFetchCars();

  if (loading) return <Loader />;

  // Select top 3 cars
  const featuredCars = cars.slice(0, 3);

  return (
    <div>
      <HeroSection />

      <section className="section position-relative text-white" style={{ backgroundColor: "#111" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/home1.png"
                alt="Aurelio Motors Futuristic Electric Cars"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Experience the Future of Mobility</h2>
              <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, illo? Reiciendis autem vero iste numquam illo officiis, minima at quibusdam velit optio deleniti repudiandae quae in perspiciatis dolore nam eligendi qui culpa reprehenderit sequi similique consectetur iusto sunt. Veniam facere odit nostrum magni, tempora sunt reprehenderit amet omnis veritatis accusamus?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center py-5">
        <div className="container">
          <h2 className="section-title mb-3">Welcome to Aurelio Motors</h2>
          <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
            Discover cutting-edge electric vehicles designed for the future of mobility.
          </p>
        </div>
      </section>

      <section className="section py-5 bg-dark">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h2 className="section-title text-center mb-4">Featured Models</h2>

          <div className="row g-4 justify-content-center">
            {featuredCars.map((car) => (
              <div key={car.id} className="col-sm-12 col-md-6 col-lg-4 d-flex">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
