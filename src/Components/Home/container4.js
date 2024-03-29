import "./container4.css";
import c41 from "../Images/Kira.webp";
import c42 from "../Images/Dead at Last.webp";
import c43 from "../Images/Chronosplit.webp";
function Cont4() {
  return (
    <>
      <div id="container4">
        <div id="cont4-bgimg"></div>
        <div id="cont4-bgimg2"></div>
        <div id="cont4-up">
          <div id="deal-offer">
            <p>THIS WEEK'S DEALS</p>
            <h1>10%</h1>
            <h2>off all games</h2>
            <button>Shop Now</button>
          </div>
          <div class="deal-offer-img deal-image1">
            <img src={c41} alt="" />
          </div>
          <div class="deal-offer-img deal-image2">
            <img src={c42} alt="" />
          </div>
          <div class="deal-offer-img deal-image3">
            <img src={c43} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cont4;
