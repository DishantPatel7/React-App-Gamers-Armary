import React from "react";
import Head from "../Header/header";
import { Link ,ScrollRestoration} from "react-router-dom";
import CO1 from "../Images/console/CO1.webp";
import CO2 from "../Images/console/CO2.jpg";
import CO3 from "../Images/console/CO3.webp";
import CO4 from "../Images/console/CO4.webp";

const Consoles = () => {
  const productsData = [
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
              <p>Consoles</p>
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
            <h1>Consoles</h1>
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

export default Consoles;
