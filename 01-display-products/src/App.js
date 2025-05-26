import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import Brands from "./components/Brands/Brands";
import MyCarousel from "./components/Carousel/MyCarousel";
import BrandCard from "./components/BrandCard/BrandCard";
import Divider from "./components/Divider/Divider";
import Slider from "./components/Slider/Slider";
import CenteredText from "./components/CenteredText/CenteredText";
import { Col, Row } from "react-bootstrap";
import Footer from "./components/Footer/Footer";

function App() {
  const slider = [
    {
      url: "https://shopon.pk/images/promo/249/xbox_Gift_cards__2_.png",
    },
    {
      url: "https://shopon.pk/images/promo/214/_123-456-7890.png",
    },
    {
      url: "https://shopon.pk/images/promo/249/xbox_Gift_cards__1_.png",
    },
    {
      url: "https://shopon.pk/images/promo/206/Untitled_design.png",
    },
    {
      url: "https://shopon.pk/images/promo/214/special_offer.png",
    },
    {
      url: "https://shopon.pk/images/promo/222/Solar_componenets.png",
    },
    {
      url: "https://shopon.pk/images/promo/250/xbox_Gift_cards__3_.png",
    },
  ];

  const itemsOnScreen = {
    desktop: 4,
    tablet: 3,
    mobile: 1,
  };

  const sliderImageUrl1 = [
    {
      name: "G-Shock Casio 08",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2020/12/BA-110RG-1ADR-1.jpg",
    },
    {
      name: "G-shock Casio 09 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2022/01/GM-S2100-3ADR-1.jpg",
    },
    {
      name: "G-shock Casio 10 ",
      price: "$600",
      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GMA-S2100-1ADR.jpg",
    },
    {
      name: "G-shock Casio 11 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2000S-1ADR.jpg",
    },
    {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100-1A3DR.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100FR-5ADR.jpg",
    },
  ];

  const brandImg = [
    {
      url: "https://shopon.pk/images/images/Playstation-card-from-shopon.jpg?1696679699501",
    },
    {
      url: "https://shopon.pk/images/images/Google-Play-gift-card.jpg?1696679747133",
    },
    {
      url: "https://shopon.pk/images/images/itune-gift-card.jpg?1696679797447",
    },
    {
      url: "https://shopon.pk/images/images/Amazon-gift-card.jpg?1696679866632",
    },
  ];
  const children = [
    {
      url: "https://shopon.pk/images/images/MEN.jpg?1708514603633",
    },
    {
      url: "https://shopon.pk/images/images/women.jpg?1708514692327",
    },
    {
      url: "https://shopon.pk/images/images/kids.jpg?1708514791762",
    },
    {
      url: "https://shopon.pk/images/images/dd.jpg?1708514896368",
    },
  ];

  const gameCards = [
    { url: "https://shopon.pk/images/promo/182/gaming-cards.jpg" },
    { url: "https://shopon.pk/images/promo/182/IPHONE-SALESS.jpg" },
  ];

  const popularGameCards = [
    { url: "https://shopon.pk/images/thumbnails/270/270/detailed/2/con1.jpg" },
    { url: "https://shopon.pk/images/thumbnails/270/270/detailed/12/t49.jpg" },
    {
      url: "https://shopon.pk/images/thumbnails/270/270/detailed/94/WhatsApp_Image_2021-10-16_at_3.04.06_PM.jpeg",
    },
    {
      url: "https://shopon.pk/images/thumbnails/270/270/detailed/94/WhatsApp_Image_2021-10-16_at_2.34.27_PM__1__68gq-rz.jpeg",
    },
    {
      url: "https://shopon.pk/images/thumbnails/270/270/detailed/94/WhatsApp_Image_2021-10-16_at_3.04.04_PM.jpeg",
    },
    {
      url: "https://shopon.pk/images/thumbnails/270/270/detailed/8/1__36_-1000x1000.jpg",
    },
  ];

  const sliderImageUrl2 = [
    {
      name: "G-Shock Casio 08",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/5590-3.jpg",
    },
    {
      name: "G-shock Casio 09 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/sdjs_1.jpg",
    },
    {
      name: "G-shock Casio 10 ",
      price: "$600",
      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/4zu3_HP_Probook_645_G4.jpg",
    },
    {
      name: "G-shock Casio 11 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/840-G5-4.jpg",
    },
    {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/P8agK8Aifu_r2rb-ok.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/P8agK8Aifu_r2rb-ok.jpg",
    },
  ];

  const subscriptionCard = [
    {
      name: "G-Shock Casio 08",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L_98c1-km.jpg",
    },
    {
      name: "G-shock Casio 09 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L_98c1-km.jpg",
    },
    {
      name: "G-shock Casio 10 ",
      price: "$600",
      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L_pbc8-n4.jpg",
    },
    {
      name: "G-shock Casio 11 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__12_.jpg",
    },
    {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__12__kfrd-ej.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__12__8rnm-9r.jpg",
    },
  ];
  const homeAndDecor = [
    {
      name: "G-Shock Casio 08",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/84/791d1b218a7031a53b50e71e5d5a0739.jpg",
    },
    {
      name: "G-shock Casio 09 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/84/ca08bcf7394bd53d4b079902f5062b73.jpg",
    },
    {
      name: "G-shock Casio 10 ",
      price: "$600",
      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/83/c5f9a761931a392cb5bb51948825400e.jpg",
    },
    {
      name: "G-shock Casio 11 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/86/e896078edc1035491da7b1b93302cf8b.jpg",
    },
    {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/86/28e5978720e5f09d6cb603e48d02a101.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/86/fd26b7957f67b1638286ae62fa990288.jpg",
    },
    {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/Revolving-8-Pcs-Spice-Rack-Tower-Kitchen-Masala-Jar-rs-1500-_1_360x.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/1-_176_360x.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/dde953cc-29cd-47ce-84df-bf02d9aa6766_1_360x.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: ["golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://shopon.pk/images/thumbnails/270/270/detailed/137/4.JPG",
    },
  ];

  return (
    <>
      <MyNavbar />
      <Slider slider={slider} />
      <Brands />
      <Divider />
      <MyCarousel data={sliderImageUrl1} lg={4} md={3} sm={1} />
      <CenteredText text={"TRENDING GIFT CARDS"} linkText={"VIEW ALL"} />

      {/* brand cards */}
      {
        <div class="container">
          <Row className="p-3 justify-content-between row-gap-3">
            {brandImg.map((item, index) => {
              return (
                <Col
                  md={3}
                  sm={6}
                  key={index}
                  className="p-0 d-flex justify-content-center align-items-center pb-0"
                >
                  <BrandCard title={item.title} imgUrl={item.url} />
                </Col>
              );
            })}
          </Row>
        </div>
      }

      {/* game cards */}
      {
        <div class="container">
          <Row className=" justify-content-center justify-content-lg-between">
            {gameCards.map((item, index) => {
              return (
                <Col
                  md={6}
                  sm={12}
                  key={index}
                  className="p-0 d-flex justify-content-center "
                >
                  <BrandCard title={item.title} imgUrl={item.url} />
                </Col>
              );
            })}
          </Row>
        </div>
      }
      <CenteredText text={"MOBILE & ACCESSORIES"} linkText={"VIEW ALL"} />

      

      {/* assessories cards */}

      {/* {
        <div class="container">
          <Row className=" justify-content-center justify-content-lg-between">
            {gameCards.map((item, index) => {
              return (
                <Col
                  md={2}
                  sm={12}
                  key={index}
                  className="p-0 d-flex justify-content-center "
                >
                  <BrandCard title={item.title} imgUrl={item.url} />
                </Col>
              );
            })}
          </Row>
        </div>
      } */}

      {/* electronics */}
      {
        <div class="container my-3">
          <Row>
            <Col className=" electronics p-0 ">
              <BrandCard
                title={""}
                imgUrl={
                  "https://shopon.pk/images/promo/183/electronics-collection.jpg"
                }
              />
            </Col>
          </Row>
        </div>
      }

      <CenteredText text={"ELECTRONICS"} linkText={""} />
      <CenteredText text={"FASHION"} linkText={"VIEW ALL"} />

      {/* fashion banner */}
      {
        <div class="container my-3">
          <Row>
            <Col className=" electronics p-0 ">
              <BrandCard
                title={""}
                imgUrl={
                  "https://shopon.pk/images/images/summer-new-arrials.jpg?1708514544809"
                }
              />
            </Col>
          </Row>
        </div>
      }

      {/* children items cards */}
      {
        <div class="container">
          <Row className="p-3 justify-content-between row-gap-3">
            {children.map((item, index) => {
              return (
                <Col
                  md={3}
                  sm={6}
                  key={index}
                  className="p-0 d-flex justify-content-center align-items-center pb-0"
                >
                  <BrandCard title={item.title} imgUrl={item.url} />
                </Col>
              );
            })}
          </Row>
        </div>
      }
      {/* popular video game cards */}
      {
        <div class="container">
          <Row className="p-3 justify-content-between row-gap-3">
            {popularGameCards.map((item, index) => {
              // console.log(item.url);
              return (
                <Col
                  md={3}
                  lg={2}
                  sm={6}
                  key={index}
                  className="p-0 d-flex justify-content-center align-items-center pb-0"
                >
                  <BrandCard title={item.title} imgUrl={item.url} />
                </Col>
              );
            })}
          </Row>
        </div>
      }

      {/* creativity banner */}
      {
        <div class="container my-3">
          <Row>
            <Col className=" electronics p-0 ">
              <BrandCard
                title={""}
                imgUrl={
                  "https://shopon.pk/images/promo/183/laptop-new-sals.jpg"
                }
              />
            </Col>
          </Row>
        </div>
      }

      <MyCarousel data={sliderImageUrl2} lg={5} md={3} sm={1} />
      <MyCarousel data={sliderImageUrl2} lg={5} md={3} sm={1} />
      <CenteredText text={"DEALS OF THE WEEK"} linkText={""} />

      {/* subscription cards */}
      <MyCarousel data={subscriptionCard} lg={6} md={4} sm={1} />

      {/* decorating banner */}
      {
        <div class="container my-3">
          <Row>
            <Col className=" electronics p-0 ">
              <BrandCard
                title={""}
                imgUrl={"https://shopon.pk/images/promo/183/decore-roome.jpg"}
              />
            </Col>
          </Row>

          <CenteredText text={"HOME & DECOR"} linkText={""} />
        </div>
      }

      {/* children items cards */}
      {
        <div class="container p-4">
          <Row className="p-3 justify-content-start row-gap-3">
            {homeAndDecor.map((item, index) => {
              return (
                <Col
                  lg={2}
                  md={3}
                  sm={6}
                  key={index}
                  className="p-0 d-flex justify-content-center align-items-center pb-0"
                >
                  <BrandCard title={item.name} imgUrl={item.img} />
                </Col>
              );
            })}
          </Row>
        </div>
      }

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
