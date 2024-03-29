import "./footer.css";
import logo from "../Images/logo/p3-removebg-preview.png";
import p1 from "../Images/Payments/Visa.webp";
import p2 from "../Images/Payments/Master Card.webp";
import p3 from "../Images/Payments/American Express.webp";
import p4 from "../Images/Payments/Discover.webp";
import p5 from "../Images/Payments/JCB.webp";
import p6 from "../Images/Payments/PayPal.webp";
function Foot() {
  return (
    <>
      <div id="container8">
        <div id="cont8-upside">
          <div id="logo2">
            <img src={logo} alt="" />
            <p>Gamer's Armary</p>
          </div>
          <div class="detials">
            <p>Products</p>
            <p>Games</p>
            <p>Consoles</p>
            <p>Controllers</p>
            <p>Accessories</p>
          </div>
          <div class="detials">
            <p>Store</p>
            <p>500 Terry Francine Street San Francisco, CA 94158</p>
            <p>Mon - Fri: 9am - 9pm</p>
            <p>info@mysite.com</p>
            <p>123-456-7890</p>
          </div>
          <div class="detials">
            <p>Policy</p>
            <p>Terms & Conditions</p>
            <p>Shipping Policy</p>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>FAQ</p>
          </div>
        </div>
        <div id="hr">
          <hr />
        </div>
        <div id="cont8-downside">
          <div id="cont8-left">
            <p>Payment Methods</p>
            <div id="payment">
              <img src={p1} alt="" />
              <img src={p2} alt="" />
              <img src={p3} alt="" />
              <img src={p4} alt="" />
              <img src={p5} alt="" />
              <img src={p6} alt="" />
            </div>
          </div>
          <div id="cont8-right">
            <p>Join the Community</p>
            <div id="social">
              <i class="ri-facebook-fill"></i>
              <i class="ri-instagram-line"></i>
              <i class="ri-youtube-fill"></i>
              <i class="ri-twitter-fill"></i>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>© 2024 by Gamer's Armary. Powered and secured by DN Pvt.Ltd</p>
      </footer>
    </>
  );
}
export default Foot;
