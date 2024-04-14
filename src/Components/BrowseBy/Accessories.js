import React from "react";
import H1 from "../Images/Headphones/H1.webp";
import H2 from "../Images/Headphones/H2.jpg";
import H3 from "../Images/Headphones/H3.jpg";
import H4 from "../Images/Headphones/H4.jpg";
import M1 from "../Images/Mouse/M1.jpg";
import M2 from "../Images/Mouse/M2.jpg";
import M3 from "../Images/Mouse/M3.jpg";
import M4 from "../Images/Mouse/M4.jpg";
import MP1 from "../Images/Mouse/MP1.webp";
import MP2 from "../Images/Mouse/MP2.webp";
import K1 from "../Images/KeyBoards/K1.webp";
import K2 from "../Images/KeyBoards/K2.webp";
import K3 from "../Images/KeyBoards/K3.webp";
import K4 from "../Images/KeyBoards/K4.webp";

import { Link } from "react-router-dom";
import Head from "../Header/header";

const Accessories = () => {
  const productsData = [
    {
      img: M1,
      name: "Logitech G502 X Lightspeed Plus Wireless RGB Gaming Mouse",
      price: "₹14,000",
    },
    {
      img: M2,
      name: "Logitech G502 Lightspeed Wireless Gaming Mouse",
      price: "₹11,095",
    },
    {
      img: M3,
      name: "Logitech G304 Lightspeed Wireless Gaming Mouse",
      price: "₹2,299",
    },
    {
      img: M4,
      name: "Logitech G PRO Wireless Gaming Mouse",
      price: "₹9,999",
    },
    {
      img: MP1,
      name: "FIRESTORM",
      price: "₹329",
    },
    {
      img: K1,
      name: "MAX NINJA 200 WIRELESS GAMING KEYBOARD (MECHANICAL)",
      price: "₹ 3,999.00",
    },
    {
      img: K2,
      name: "NITRO PRO WIRED GAMING KEYBOARD (MECHANICAL)",
      price: "₹ 2,499.00",
    },
    {
      img: MP2,
      name: "BLAZE XL RGB (SANTANU EDITION)",
      price: "₹ 1,299.00",
    },
    {
      img: K3,
      name: "MAX CHROMA WIRED GAMING KEYBOARD (MECHANICAL)",
      price: "₹ 3,799.00",
    },
    {
      img: K4,
      name: "MAX NINJA WIRELESS GAMING KEYBOARD (MECHANICAL)",
      price: "₹ 3,699.00",
    },
    {
      img: H1,
      name: "Zebronics Jet Premium Wired Gaming On Ear Headphone with LED Light for earcups",
      price: "₹790",
      url: "/ProductLanding",
    },
    {
      img: H2,
      name: "JBL Quantum 100 Wired Over Ear Gaming Headphones with Mic",
      price: "₹2,099",
    },
    {
      img: H3,
      name: "Razer BlackShark V2 X - White ",
      price: "₹4,599",
    },
    {
      img: H4,
      name: "HyperX Cloud Stinger 2 Core Essential PC Gaming Wired Headset",
      price: "₹3,599",
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
              <p>Accessories</p>
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

          <div class="Products-R">
            <h1>Accessories</h1>
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
        </div>
      </div>
    </>
  );
};

export default Accessories;
