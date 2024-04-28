import React from "react";
import b1 from "../Images/Best seller/b1.webp";
import b2 from "../Images/Best seller/b2.webp";
import b3 from "../Images/Best seller/b3.webp";
import b4 from "../Images/Best seller/b4.webp";
import b5 from "../Images/Best seller/b5.webp";
import b6 from "../Images/Best seller/b6.webp";
import b7 from "../Images/Best seller/b7.webp";
import Head from "../Header/header";
import { Link, ScrollRestoration } from "react-router-dom";

const Bestsellers = () => {
  const productsData = [
    {
      img: b1,
      name: "Mach Gaming Chair",
      price: "₹12000",
    },
    {
      img: b2,
      name: "X-2 Wireless",
      price: "₹2500",
    },
    {
      img: b3,
      name: "Headphone XD200",
      price: "₹2399",
    },
    {
      img: b4,
      name: "Sparun Mechanical keyboard",
      price: "₹2000",
    },
    {
      img: b5,
      name: "Raptor",
      price: "₹5099",
    },
    {
      img: b6,
      name: "Wave",
      price: "₹2199",
    },
    {
      img: b7,
      name: "PS5",
      price: "₹35049",
    },
  ];

  return (
    <>
      <Head />
      <div id="Products">
        <div class="Products-content">
          <div class="Products-L">
            <div>
              <Link to="/React-App-Gamers-Armary">
                Home<i class="ri-arrow-right-s-line"></i>
              </Link>
              <p>Bestsellers</p>
            </div>
            <div id="browseBy">
              <h1>Browse by</h1>
              <hr />
              <div id="Links-Products">
                <Link to="/Browseby">All Products </Link>
                <Link to="/Accessories">Accessories </Link>
                <Link to="/Best-Sellers">Best Sellers </Link>
                <Link to="/Consoles">Consoles </Link>
                <Link to="/Controllers">Controllers </Link>
                <Link to="/Games">Games </Link>
                {/* <Link to="./">On Sale </Link> */}
              </div>
            </div>
          </div>
          {/* <Products_L /> */}

          <div class="Products-R">
            <h1>Bestsellers</h1>
            {/* <p>26 Products</p> */}
            <div class="Products-items">
              {productsData.map((test, index) => (
                <div class="pro-item-Card" key={index}>
                  <div class="pro-item-Img">
                    <Link to={test.url}>
                      <img src={test.img} alt="img" />
                    </Link>
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
            </div>
          </div>

          {/* <div className="Products-R"><Test/></div> */}
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Bestsellers;
