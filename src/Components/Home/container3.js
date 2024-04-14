import "./container3.css";
import c31 from "../Images/console.webp";
import c32 from "../Images/Accessories1.png";
import c33 from "../Images/Controllers.jpeg";
import { Link } from "react-router-dom";
function Cont3() {
  return (
    <>
      <div id="container3">
        <div id="cont3-bgimg"></div>
        <div id="cont3-data">
          <h1>SHOP BY CATEGORY</h1>
          <div class="category-item">
            <div class="item">
              <div class="item-div">
                <Link to="/Consoles">
                  <img src={c31} alt="" />
                </Link>
              </div>
              <p>Console</p>
            </div>
            <div class="item">
              <div class="item-div">
                <Link to="/Accessories">
                  <img src={c32} alt="" />
                </Link>
              </div>
              <p>Accessories</p>
            </div>
            <div class="item">
              <div class="item-div">
                <Link to="/Controllers">
                  <img src={c33} alt="" />
                </Link>
              </div>
              <p>Controllers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cont3;
