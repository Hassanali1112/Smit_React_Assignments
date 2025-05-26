import Accordion from "react-bootstrap/Accordion";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareXTwitter,
  faSquareYoutube,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

function FooterAccordian() {
  return (
    <Accordion className="accordian_footer">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ backgroundColor: "#2E2E54", color: "#fff" }}>
          <h6>USEFUL LINKS</h6>
        </Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#2E2E54", color: "#fff" }}>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        style={{ backgroundColor: "#2E2E54", color: "#fff" }}
        eventKey="1"
      >
        <Accordion.Header>
          <h6>MY ACCOUNT</h6>
        </Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#2E2E54", color: "#fff" }}>
          <ul>
            <li>
              <a href="/">Sign in</a>
            </li>
            <li>
              <a href="/">Create account</a>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        style={{ backgroundColor: "#2E2E54", color: "#fff" }}
        eventKey="2"
      >
        <Accordion.Header>
          <h6>CUSTOMER SERVICE</h6>
        </Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        style={{ backgroundColor: "#2E2E54", color: "#fff" }}
        eventKey="3"
      >
        <Accordion.Header>
          <h6>CONTACT US</h6>
        </Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ backgroundColor: "#2E2E54", color: "#fff" }}>
          <h6>KEEP IN TOUCH</h6>
        </Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FooterAccordian;
