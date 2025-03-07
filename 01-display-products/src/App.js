import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import Brands from "./components/Brands/Brands";
import MyCarousel from "./components/Carousel/MyCarousel";
import BrandCard from "./components/BrandCard/BrandCard";
import Divider from "./components/Divider/Divider";

function App() {
  return (
    <>
    <MyNavbar />
    <Brands />
    <Divider />
    <MyCarousel />
    <BrandCard />
      
    </>
  );
}

export default App;
