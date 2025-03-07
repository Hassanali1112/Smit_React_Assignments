import "./brands.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrandCard from "../BrandCard/BrandCard";
import "bootstrap/dist/css/bootstrap.min.css";

const Brands = () => {
  const cardItems = [
    {
      title: "Gift Cards",
      imgUrl: "https://shopon.pk/images/images/gift-card.png?1700821419075",
    },
    {
      title: "Grocery",
      imgUrl: "https://shopon.pk/images/images/grocery.png?1700821641905",
    },
    {
      title: "Fashion",
      imgUrl: "https://shopon.pk/images/images/fashion.png?1700821697408",
    },
    {
      title: "Beauty",
      imgUrl: "https://shopon.pk/images/images/beauty.png?1700821781831",
    },
    {
      title: "Home Dcor",
      imgUrl:
        "https://shopon.pk/images/images/home-decor-item.png?1700821738843",
    },
    {
      title: "Mobiles & Tablets",
      imgUrl:
        "https://shopon.pk/images/images/mobile-%26-tablets.png?1700821816773",
    },
    {
      title: "Electonics",
      imgUrl: "https://shopon.pk/images/images/electonics.png?1700822336297",
    },
    {
      title: "New On Shopon",
      imgUrl: "https://shopon.pk/images/images/new-on-shopon.png?1700822388029",
    },
    {
      title: "Bands",
      imgUrl:
        "https://shopon.pk/images/images/brands-west-points.png?1700822468020",
    },
  ];

  return (
    <div className="container p-3 ">
      <div
        className="parent"
        style={{ borderRadius: "10px", background: "#FFFFFF" }}
      >
        {
          <Row className="p-3 justify-content-between row-gap-3">
            {cardItems.map((item, index) => {
              console.log(item.imgUrl);
              return (
                <Col md={1}  key={index} className="p-0 d-flex justify-content-center col_width">
                  <BrandCard title={item.title} imgUrl={item.imgUrl} />
                </Col>
              );
            })}
          </Row>
        }
      </div>
    </div>
  );
};

export default Brands;
