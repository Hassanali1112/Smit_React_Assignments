import Card from "react-bootstrap/Card";


const BrandCard = ()=>{

  return (
    <>
      <Card
        className="slider border border-danger py-5"
        //  style={{ width: "17.75rem" }}
      >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
          
          {/* <Button variant="success"></Button> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default BrandCard;