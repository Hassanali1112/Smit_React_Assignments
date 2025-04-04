import Button from "react-bootstrap/Button";
import "./navbar.css"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNavbar() {

  function closeBtn (){
    let toggleBtn = document.querySelector(".navbar-toggler-icon");
    toggleBtn.click()
    // alert("clicked")
  }

  // let closeBtn = document.querySelector(".icon")
  // closeBtn.addEventListener("click", function(){
  //   alert("close clicked")
  // })

  return (
    <Navbar
      expand="lg"
      // className="bg-body-tertiary"
      style={{ backgroundColor: "#ECECEC" }}
    >
      <Container className="px-0">
        <div className=" w-100 responsive_container py-2 d-flex justify-content-between flex-row flex-md-column flex-lg-row gap-md-3">
          <div className="left d-flex ">
            <Navbar.Toggle className="me-3" aria-controls="navbarScroll" />
            <Navbar.Brand href="#">
              <img
                width={100}
                src="https://shopon.pk/images/logos/9/Shopon_Logo_F-03__1__3n3z-fn.png"
                alt="shop on logo"
              />
            </Navbar.Brand>
            <Navbar.Collapse
              id="navbarScroll"
              className="new-collapse"
              // style={{ maxWidth: "200px" }}
            >
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{
                  fontSize: ".83rem",
                  fontWeight: 500,
                  color: "#041230",
                }}
                navbarScroll
              >
                <Nav.Link href="#action1">
                  <div
                    className="wrapper d-flex justify-content-between pb-3 d-none"
                    style={{ borderBottom: "2px solid #369A15", color: "#fff" }}
                  >
                    <div className="icon " onClick={closeBtn}>
                      X
                    </div>
                    <div className="auth ">
                      <span>SIGN IN</span> OR <span>REGISTER</span>
                    </div>
                  </div>
                </Nav.Link>
                <Nav.Link href="#action1" className="text-light">
                  GIFT CARDS
                </Nav.Link>
                <Nav.Link href="#action1" className="text-light">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2">MOBILES & TABLETS</Nav.Link>
                <Nav.Link href="#action2">FASHION</Nav.Link>
                <Nav.Link href="#action2">ELECTRONICS</Nav.Link>
                <Nav.Link href="#action2">BRANDS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="d-flex gap-2 gap-lg-5 align-items-center p-0 ">
            <div
              className="inpur-search d-flex border rounded overflow-hidden p-0"
              style={{ height: "3rem" }}
            >
              <input
                type="search"
                placeholder="search products"
                className=" border-0 ps-2 w-100"
                aria-label="Search"
                style={{ fontSize: ".8rem", backgroundColor: "#F5F5F5" }}
              />
              <svg
                style={{ backgroundColor: "#3DB349", padding: ".6rem .4rem" }}
                xmlns="http://www.w3.org/2000/svg"
                // height="40px"
                viewBox="0 0 24 24"
                width="40px"
                fill="#e3e3e3"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 0 24 24"
              width="40px"
              fill="#1f1f1f"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 0 24 24"
              width="40px"
              fill="#1f1f1f"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
