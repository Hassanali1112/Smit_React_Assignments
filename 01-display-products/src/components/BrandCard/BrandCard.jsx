import Card from "react-bootstrap/Card";


const BrandCard = ({ title, imgUrl }) => {
  // console.log(imgUrl);
  return (
    <>
      <Card
        className="w-100 p-0  "
         style={{ border : "none" }}
      >
        <div className="img_container d-flex justify-content-center">
          <Card.Img variant="top" style={{ width: "80px" }} src={imgUrl} />
        </div>

        <Card.Body className="border-none text-center px-0 pb-0 lead">
          <Card.Title style={{ fontSize: ".83rem" }}>{title}</Card.Title>
          <Card.Text></Card.Text>

          {/* <Button variant="success"></Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default BrandCard;