import "./slider.css"
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function MyCarousel({slides}) {
  console.log(slides)
  return (
    <Carousel controls={false} indicators={true}>
      {slides.map((slid) => (
        <Carousel.Item style={{ height: "50dvh" }}>
          <img
            src={slid.url}
            className="img-fluid"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition : "center" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
