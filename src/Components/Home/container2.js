import "./container2.css";
// import "./swiper.css";
import b1 from "../Images/Best seller/b1.webp";
import b2 from "../Images/Best seller/b2.webp";
import b3 from "../Images/Best seller/b3.webp";
import b4 from "../Images/Best seller/b4.webp";
import b5 from "../Images/Best seller/b5.webp";
import b6 from "../Images/Best seller/b6.webp";
import b7 from "../Images/Best seller/b7.webp";

function Cont2() {
  return (
    <>
      <div id="container2">
        <div class="cont-slider-text">
          <h1>BEST SELLERS</h1>
          <button>view all</button>
        </div>
        <div id="bestseller">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slideImg">
                  <img src={b1} alt="" />
                </div>
                <div class="slideText">
                  <p>Mach Gaming Chair</p>
                  <p>₹12000</p>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideImg">
                  <img src={b2} alt="" />
                </div>
                <div class="slideText">
                  <p>X-2 Wireless</p>
                  <p>₹2500</p>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideImg">
                  <img src={b3} alt="" />
                </div>
                <div class="slideText">
                  <p>Headphone XD200</p>
                  <p>₹2399</p>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideImg">
                  <img src={b4} alt="" />
                </div>
                <div class="slideText">
                  <p>Sparun Mechanical keyboard</p>
                  <p>₹2000</p>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideImg">
                  <img src={b5} alt="" />
                </div>
                <div class="slideText">
                  <p>Raptor</p>
                  <p>₹5099</p>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideImg">
                  <img src={b6} alt="" />
                </div>
                <div class="slideText">
                  <p>Wave</p>
                  <p>₹2199</p>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideImg">
                  <img src={b7} alt="" />
                </div>
                <div class="slideText">
                  <p>PS5</p>
                  <p>₹35049</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            {/* <!-- <div class="swiper-pagination"></div> --> */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cont2;
