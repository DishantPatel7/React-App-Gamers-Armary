import React from "react";
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

const Test = () => {
  const productsData = [
    {
      img: H1,
      name: "Zebronics Jet Premium Wired Gaming On Ear Headphone with LED Light for earcups",
      price: "₹790",
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
    {
      img: C7,
      name: "Green Soul® | Jupiter Superb | Premium Chair ",
      price: "₹8,999",
    },
    {
      img: C8,
      name: "Green Soul Beast Racing Edition Ergonomic Gaming Chair with Premium Fabric & PU Leather",
      price: "₹15,199",
    },
    {
      img: C9,
      name: "Drogo Ergo Plus Ergonomic Gaming Chair with Footrest, Breathable Fabric, Adjustable Seat & 3D Armrest ",
      price: "₹16,990",
    },
  ];
  return (
    <>
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
      </div>
    </>
  );
};

export default Test;
