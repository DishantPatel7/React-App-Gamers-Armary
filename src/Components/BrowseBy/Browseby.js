import React from "react";
import "./Browseby.css";
import Head from "../Header/header";
import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { items } from "./Data";

const Browseby = () => {
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
              {items.map((product) => (
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
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="Products-R"><Test/></div> */}
        </div>
      </div>
      {/* <ScrollRestoration /> */}
    </>
  );
};

export default Browseby;
