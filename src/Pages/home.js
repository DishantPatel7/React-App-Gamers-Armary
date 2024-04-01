import "./home.css";
import Foot from "../Components/Footer/footer";
import Head from "../Components/Header/header";
import Carousel from "../Components/Home/carousel";
import Cont2 from "../Components/Home/container2";
import Cont3 from "../Components/Home/container3";
import Cont4 from "../Components/Home/container4";
import Cont6 from "../Components/Home/container6";
import Cont7 from "../Components/Home/container7";

function Homeconts() {
  return (
    <>
      <div id="home">
        <Head />
        <Carousel />
        <Cont2 />
        <Cont3 />
        <Cont4 />
        <Cont6 />
        <Cont7 />
        <Foot />
      </div>
    </>
  );
}
export default Homeconts;
