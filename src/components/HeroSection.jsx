import Carousel from "react-bootstrap/Carousel";

const HeroCarousel = () => {
  const banners = [
    { id: 1, image: "/banner1.png"},
    { id: 2, image: "/banner2.png"},
    { id: 3, image: "/banner3.png"}
  ];

  return (
    <Carousel fade interval={3500}>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            src={banner.image}
            alt={banner.caption}
            style={{ maxHeight: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold">{banner.caption}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
