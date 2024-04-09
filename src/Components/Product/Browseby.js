import React from "react";
import "./Browseby.css";
import M1 from "../Images/Laptops/M1.jpg";
import M2 from "../Images/Laptops/M2.jpg";
import Head from "../Header/header";
import { Link } from "react-router-dom";
import Test from "./Test";

const Browseby = () => {
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
    {
      img: M2,
      name: "",
      price: "",
    },
    
  ];
  return (
    <>
      {/* <Head /> */}
      <div id="Products">
        <div class="Products-content">
          <div class="Products-L">
            <div>
              <Link to="/React-App-Gamers-Armary">
                Home<i class="ri-arrow-right-s-line"></i>
              </Link>
              <p>hello</p>
            </div>
            <div id="browseBy">
              <h1>Browse by</h1>
              <hr />
              <div id="All-Products">
                <Link to="./">All Products </Link>
                <Link to="/test">Accessories </Link>
                <Link to="./">Best Sellers </Link>
                <Link to="./">Consoles </Link>
                <Link to="./">Controllers </Link>
                <Link to="./">Games </Link>
                <Link to="./">On Sale </Link>
              </div>
            </div>
          </div>

          <div class="Products-R">
            <h1>All Products</h1>
            <p>26 Products</p>
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
              {/* <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div>
              <div class="pro-item-Card"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browseby;
