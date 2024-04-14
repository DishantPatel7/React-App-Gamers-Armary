import React from "react";
import "./Browseby.css";
import C1 from "../Images/Chairs/C1.jpg";
import C2 from "../Images/Chairs/C2.jpg";
import C3 from "../Images/Chairs/C3.jpg";
import C4 from "../Images/Chairs/C4.jpg";
import C5 from "../Images/Chairs/C5.jpg";
import C6 from "../Images/Chairs/C6.jpg";
import C7 from "../Images/Chairs/C7.jpg";
import C8 from "../Images/Chairs/C8.jpg";
import C9 from "../Images/Chairs/C9.jpg";
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
import CO1 from "../Images/console/CO1.webp";
import CO2 from "../Images/console/CO2.webp";
import CO3 from "../Images/console/CO3.webp";
import CO4 from "../Images/console/CO4.webp";
import X1 from "../Images/Controller/X1.webp";
import X2 from "../Images/Controller/X2.webp";
import X3 from "../Images/Controller/X3.webp";
import X4 from "../Images/Controller/X4.webp";

import Head from "../Header/header";
import { Link } from "react-router-dom";

import Products_L from "./Products_L";

const Browseby = () => {
  const productsData = [
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
      img: C1,
      name: "Green Soul® Ghost Ergonomic Gaming Chair",
      price: "₹16,999",
    },
    {
      img: C2,
      name: "Savya Home Snipe Gaming Chair with Adjustable Headrest & Lumbar Support",
      price: "₹7,569",
    },
    {
      img: C3,
      name: "Da URBAN® High Back Mesh Ergonomic",
      price: "₹6,999",
    },
    {
      img: C4,
      name: "SAVYA HOME Apollo High Back Ergonomic Chair ",
      price: "₹6,459",
    },
    {
      img: C5,
      name: "Green Soul® Raptor 2.0 Racing Edition Ergonomic Gaming Chair with Premium PU Leather",
      price: "₹13,999",
    },
    {
      img: C6,
      name: "Green Soul® Crest Premium High Back/Fiction Multi-Functional Ergonomic Gaming Chair ",
      price: "₹9,999",
    },
    // {
    //   img: C7,
    //   name: "Green Soul® | Jupiter Superb | Premium Chair ",
    //   price: "₹8,999",
    // },
    // {
    //   img: C8,
    //   name: "Green Soul Beast Racing Edition Ergonomic Gaming Chair with Premium Fabric & PU Leather",
    //   price: "₹15,199",
    // },
    // {
    //   img: C9,
    //   name: "Drogo Ergo Plus Ergonomic Gaming Chair with Footrest, Breathable Fabric, Adjustable Seat & 3D Armrest ",
    //   price: "₹16,990",
    // },
    {
      img: CO1,
      name: "Gameflow Black",
      price: "₹35,000",
    },
    {
      img: CO2,
      name: "Playbox Gold Edition",
      price: "₹39,999",
    },
    {
      img: CO3,
      name: "Veritas VR Set",
      price: "₹12,599",
    },
    {
      img: CO4,
      name: "Wave Gen RX",
      price: "₹35,049",
    },
    {
      img: X1,
      name: "Ghost",
      price: "₹1299",
    },
    {
      img: X2,
      name: "Raptor",
      price: "₹5099",
    },
    {
      img: X3,
      name: "Fint",
      price: "₹1199",
    },
    {
      img: X4,
      name: "Wave",
      price: "₹2199",
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
              <p>All Product</p>
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
            <h1>All Products</h1>
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
    </>
  );
};

export default Browseby;
