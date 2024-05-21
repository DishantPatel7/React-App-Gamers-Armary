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

import { Link, ScrollRestoration } from "react-router-dom";
import Head from "../Header/header";


import { useCart } from "../Context/CartContext";

const Accessories = () => {
  const { addToCart } = useCart();
  const productsData=[
    {
      id: 5,
      img: M1,
      name: "Logitech G502 X Lightspeed Plus Wireless RGB Gaming Mouse",
      price: "₹14,000",
    },
    {
      id: 6,
      img: M2,
      name: "Logitech G502 Lightspeed Wireless Gaming Mouse",
      price: "₹11,095",
    },
    {
      id: 7,
      img: M3,
      name: "Logitech G304 Lightspeed Wireless Gaming Mouse",
      price: "₹2,299",
    },
    {
      id: 8,
      img: M4,
      name: "Logitech G PRO Wireless Gaming Mouse",
      price: "₹9,999",
    },
    { id: 9, img: MP1, name: "FIRESTORM", price: "₹329" },
    {
      id: 10,
      img: K1,
      name: "MAX NINJA 200 WIRELESS GAMING KEYBOARD (MECHANICAL)",
      price: "₹ 3,999.00",
    },
    {
      id: 11,
      img: K2,
      name: "NITRO PRO WIRED GAMING KEYBOARD (MECHANICAL)",
      price: "₹ 2,499.00",
    },
    {
      id: 12,
      img: MP2,
      name: "BLAZE XL RGB (SANTANU EDITION)",
      price: "₹ 1,299.00",
    },
    {
      id: 13,
      img: K3,
      name: "MAX CHROMA WIRED GAMING KEYBOARD (MECHANICAL)",
      price: "₹ 3,799.00",
    },
    {
      id: 14,
      img: K4,
      name: "MAX NINJA WIRELESS GAMING KEYBOARD (MECHANICAL)",
      price: "₹ 3,699.00",
    }, 
    {
      id: 1,
      pname: "JET GAMING HEADPHONE",
      img: H1,
      name: "Zebronics Jet Premium Wired Gaming On Ear Headphone with LED Light for earcups",
      price: "₹790",
      url: "/ProductLanding",
    },
    {
      id: 2,
      img: H2,
      name: "JBL Quantum 100 Wired Over Ear Gaming Headphones with Mic",
      price: "₹2,099",
    },
    {
      id: 3,
      img: H3,
      name: "Razer BlackShark V2 X - White ",
      price: "₹4,599",
    },
    {
      id: 4,
      img: H4,
      name: "HyperX Cloud Stinger 2 Core Essential PC Gaming Wired Headset",
      price: "₹3,599",
    },
  ]
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
              {productsData.map((product) => (
                <div class="pro-item-Card" key={product.id}>
                  <div class="pro-item-Img">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.img} alt="img" />
                    </Link>
                  </div>
                  <div class="pro-item-Text">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </div>
                  <div class="pro-item-Btn">
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Accessories;
