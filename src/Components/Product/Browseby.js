import React from "react";
import "./Browseby.css";
import L1 from "../Images/Laptops/L1.jpg";
import Head from "../Header/header";

const Browseby = () => {
  let productsData = [
    {
      img: L1,
      name: "HP Omen Gaming Laptop, AMD Ryzen™ 7 7840HS",
      price: "₹1,11,990",
    },
  ];
  return (
    <>
      {/* <Head /> */}
      <div id="Products">
        <div class="Products-content">
          <div class="Products-L">
            <div>
              Home<i class="ri-arrow-right-s-line"></i>
              <p>hello</p>
            </div>
            <div id="browseBy">
              <h1>Browse by</h1>
              <hr />
              <div id="All-Products">
                <p>All Products</p>
                <p>Accessories</p>
                <p>Best Sellers</p>
                <p>Consoles</p>
                <p>Controllers</p>
                <p>Games</p>
                <p>On Sale</p>
              </div>
            </div>
          </div>
          <div class="Products-R">
            <h1>All Products</h1>
            <div class="Products-items">
              {productsData.map((test, index) => (
                <div class="pro-item-Card" key={index}>
                  <div class="pro-item-Img">
                    <img src={test.img} alt="img" />
                  </div>
                  <div class="pro-item-Text">
                    <p>{test.name}</p>
                    <p>{test.price}</p>
                  </div>
                  <div class="pro-item-Btn">
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
              {/* <div class="pro-pro-item-Card">
                <div class="pro-item-Img">
                  <img src={b1} alt="img" />
                </div>
                <div class="pro-item-Text">
                  <p>Headphone XD200</p>
                  <p>₹2399</p>
                </div>
                <div class="pro-item-Btn">
                  <button>Add to Cart</button>
                </div>
              </div> */}
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browseby;
