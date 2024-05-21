import "./container2.css";
import b1 from "../Images/Best seller/b1.webp";
// import b2 from "../Images/Best seller/b2.webp";
import b2 from "../Images/Mouse/M1-kjkjk.png";
import b3 from "../Images/Headphones/H1-bgremove-removebg-preview.png";
// import b3 from "../Images/Best seller/b3.webp";
import b4 from "../Images/Best seller/b4.webp";
import b5 from "../Images/Best seller/b5.webp";
// import b6 from "../Images/Best seller/b6.webp";
import b6 from "../Images/Controller/X4-bgremove.png";
import b7 from "../Images/Best seller/b7.webp";

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';


import { useCart } from "../Context/CartContext";

function Cont2() {
  const { addToCart } = useCart();
  let data = [
    {
      id: 16,
      img: b1,
      name: "Mach Gaming Chair",
      price: "₹12000",
    },
    { id: 1, img: b2, name: "X-2 Wireless", price: "₹2500" },
    { id: 1, img: b3, name: "Headphone XD200", price: "₹2399" },
    { id: 11, img: b4, name: "Sparun Mechanical keyboard", price: "₹2000" },
    { id: 26, img: b5, name: "Raptor", price: "₹5099" },
    { id: 28, img: b6, name: "Wave", price: "₹2199" },
    { id: 24, img: b7, name: "Wave Gen RX", price: "₹35049" },
  ];
  return (
    <>
      <div id="container2">
        <div class="cont-slider-text">
          <h1>BEST SELLERS</h1>
          <button>
            <Link to="/Best-Sellers">view all</Link>
          </button>
        </div>
        <div id="bestseller">
          <Swiper
            slidesPerView={4}
            spaceBetween={40}
            loop={true}
            cssMode={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              mousewheel: true,
              keyboard: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            // Responsive breakpoints

            breakpoints={{
              // when window width is >= 320px
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              600: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              750: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {data.map((test) => (
              <SwiperSlide>
                <Link to={`/product/${test.id}`}>
                  <div class="slideImg">
                    <img src={test.img} alt="" />
                  </div>
                </Link>
                <div class="slideText">
                  <p>{test.name}</p>
                  <p>{test.price}</p>
                </div>
                <div class="cont2-btn">
                  <button onClick={() => addToCart(test)}>Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}

            {/* <SwiperSlide>
              <div class="slideImg">
                <img src={b2} alt="" />
              </div>
              <div class="slideText">
                <p>X-2 Wireless</p>
                <p>₹2500</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
                
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b3} alt="" />
              </div>
              <div class="slideText">
                <p>Headphone XD200</p>
                <p>₹2399</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b4} alt="" />
              </div>
              <div class="slideText">
                <p>Sparun Mechanical keyboard</p>
                <p>₹2000</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b5} alt="" />
              </div>
              <div class="slideText">
                <p>Raptor</p>
                <p>₹5099</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b6} alt="" />
              </div>
              <div class="slideText">
                <p>Wave</p>
                <p>₹2199</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b7} alt="" />
              </div>
              <div class="slideText">
                <p>PS5</p>
                <p>₹35049</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default Cont2;
