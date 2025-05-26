import Card from "react-bootstrap/Card";


const BrandCard = ({ title, imgUrl }) => {
  // console.log(imgUrl);
  return (
    <>
      <Card 
        className="electronics_card"
         style={{ border : "none",width : "95%",backgroundColor : "transparent" }}
      >
        <div className="img_container d-flex justify-content-center">
          <Card.Img variant="top" src={imgUrl} />
        </div>

        <Card.Body className="border-none text-center px-0 pb-0 lead">
          <Card.Title style={{ fontSize: ".83rem" }}>{title ? title : ""}</Card.Title>
          <Card.Text></Card.Text>

          {/* <Button variant="success"></Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default BrandCard;