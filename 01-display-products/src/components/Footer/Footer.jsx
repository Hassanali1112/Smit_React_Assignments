import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareXTwitter,
  faSquareYoutube,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Col, Row } from "react-bootstrap"
import FooterAccordian from "./FooterAccordian";

const Footer = () =>{

  return (
    <>
      <div
        className="footer my-5"
        style={{ backgroundColor: "#2E2E54", color: "#fff" }}
      >
        <div className="container py-5 ">
          <Row className="justify-content-between md_class">
            <Col md={2} className="p-0">
              <h6>USEFUL LINKS</h6>
              <ul>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Gift certificates</a>
                </li>
                <li>
                  <a href="/">Our brands</a>
                </li>
                <li>
                  <a href="/">Sitemap</a>
                </li>
                <li>
                  <a href="/">blog</a>
                </li>
              </ul>
            </Col>
            <Col md={2} className="p-0">
              <h6>MY ACCOUNT</h6>
              <ul>
                <li>
                  <a href="/">Sign in</a>
                </li>
                <li>
                  <a href="/">Create account</a>
                </li>
              </ul>
            </Col>
            <Col md={2} className="p-0">
              <h6>CUSTOMER SERVICE</h6>
              <ul>
                <li>
                  <a href="/">Payment & Shipping</a>
                </li>
                <li>
                  <a href="/">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/">FAQs</a>
                </li>
                <li>
                  <a href="/">Returns & Exchanges</a>
                </li>
                <li>
                  <a href="/">About your order</a>
                </li>
                <li>
                  <a href="/">Wishlist</a>
                </li>
                <li>
                  <a href="/">Comparison list</a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="p-0">
              <h6>CONTACT US</h6>
              <ul>
                <li>
                  <a href="/">15E Officers Colony Bosan Road Multan</a>
                </li>
                <li>
                  <a href="/">03336198169</a>
                </li>
                <li>
                  <a href="/">Mon-Sun 09:00 AM to 11:30 PM</a>
                </li>
                <li>
                  <a href="/">dmin@shopon.pk</a>
                </li>
                <li>
                  <a href="/">View on map</a>
                </li>
              </ul>
            </Col>
            <Col md={2} className="p-0">
              <h6>KEEP IN TOUCH</h6>
              <ul className="social-links">
                <li>
                  <a href="/">
                    <span className="icon_span">
                      <FontAwesomeIcon
                        icon={faSquareFacebook}
                        size="2x"
                        color="#000000"
                      />
                    </span>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="icon_span">
                      <FontAwesomeIcon
                        icon={faSquareInstagram}
                        size="2x"
                        color="#000000"
                      />
                    </span>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="icon_span">
                      <FontAwesomeIcon
                        icon={faSquareXTwitter}
                        size="2x"
                        color="#000000"
                      />
                    </span>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="icon_span">
                      <FontAwesomeIcon
                        icon={faSquareYoutube}
                        size="2x"
                        color="#000000"
                      />
                    </span>
                    <span>Youtube</span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          {/* accordian */}
          <FooterAccordian />
        </div>

        <div className="bottom_cards px-5 pb-4">
          <Row className="justify-content-end">
            <Col sm={4} md={2} className="card_container p-0">
              <img
                src="https://shopon.pk/images/images/shopon-paymentss.png?1686987683849"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Footer;