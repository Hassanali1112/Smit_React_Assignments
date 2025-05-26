import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { Row } from "react-bootstrap";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

function Slider({ slider }) {
  return (
    // <div className="border border-success m-0 px-0 ">
    //   {
    //     <Row className="border pe-0 m-0" style={{ width: "100%" }}>
    //       {
    //         <Carousel indicators interval={600}>
    //           {slider.map((slide, index) => (
    //             <Carousel.Item
    //             className="p-0 "
    //               key={index}
    //               style={{ height: "75vh", border: "2px solid red" }}
    //             >
    //               <img
    //                 src={slide.url}
    //                 alt={`Slide ${index + 1}`}
    //                 style={{
    //                   width: "100%",
    //                   height: "100%",
    //                   objectFit: "cover",
    //                 }}
    //               />
    //               <Carousel.Caption></Carousel.Caption>
    //             </Carousel.Item>
    //           ))}
    //         </Carousel>
    //       }
    //     </Row>
    //   }
    // </div>

    <Carousel indicators interval={600}>
      {slider.map((slide, index) => (
        <Carousel.Item key={index} style={{ height: "75vh" }}>
          <img
            src={slide.url}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

    // <Carousel>
    //   {
    //     slider.map((slide,index)=>{

    //       return (
    //         <Carousel.Item key={index}>
    //           {/* <ExampleCarouselImage text="First slide" /> */}
    //           <img src={slide.url} alt="" />
    //           <Carousel.Caption>

    //           </Carousel.Caption>
    //         </Carousel.Item>
    //       );
    //     })

    //   }
    // </Carousel>
  );
}

export default Slider;
