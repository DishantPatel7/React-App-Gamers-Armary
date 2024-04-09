import React from "react";
import M1 from "../Images/Laptops/M1.jpg";
import M2 from "../Images/Laptops/M2.jpg";
import "./Browseby.css";

const Test = () => {
  const productsData = [
    {
      img: M1,
      name: "Cosmic Byte Kilonova 3335IC Wireless",
      price: " ₹2,969",
    },
    {
      img: M2,
      name: "ZEBRONICS Marine Wireless Gaming Mouse",
      price: "₹799",
    },
    {
      img: M2,
      name: "",
      price: "",
    },
    {
      img: M2,
      name: "",
      price: "",
    },
  ];
  return (
    <>
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
    </>
  );
};

export default Test;
