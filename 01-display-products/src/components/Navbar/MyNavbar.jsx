import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css"



function MyNavbar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Container className="p-0 ">
        <Navbar.Brand href="#">
          <img
            src="https://shopon.pk/images/logos/9/Shopon_Logo_F-03__1__3n3z-fn.png"
            alt=""
            width={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse
          id="navbarScroll"
          className="d-flex justify-content-between navl_class"
        >
          <div className="nav-left">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                fontSize: ".8rem ",
                color: "black",
                fontWeight: "500",
              }}
              navbarScroll
            >
              <Nav.Link href="#action1">GIFT CARDS</Nav.Link>
              <Nav.Link href="#action1">HOME</Nav.Link>
              <Nav.Link href="#action2">MOBILE & TABLETS</Nav.Link>
              <Nav.Link href="#action2">FASHION</Nav.Link>
              <Nav.Link href="#action2">ELECTRONICS</Nav.Link>
              <Nav.Link href="#action2">BRANDS</Nav.Link>
            </Nav>
          </div>

          <div className=" d-flex nav_class gap-5">
            <Form className="d-flex border">
              <Form.Control
                type="search"
                placeholder="Search"
                className="border-0"
                aria-label="Search"
              />
              <Button
                style={{
                  backgroundColor: "#3DB349",
                  border: "none",
                  padding: "12px",
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Form>
            <div className="icons d-flex align-items-center gap-5">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              <FontAwesomeIcon icon={faUser} size="2x" />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;


//  <Nav.Link href="#action1">GIFT CARDS</Nav.Link>
//             <Nav.Link href="#action1">HOME</Nav.Link>
//             <Nav.Link href="#action2">MOBILE & TABLETS</Nav.Link>
//             <Nav.Link href="#action2">FASHION</Nav.Link>
//             <Nav.Link href="#action2">ELECTRONICS</Nav.Link>
//             <Nav.Link href="#action2">BRANDS</Nav.Link>  