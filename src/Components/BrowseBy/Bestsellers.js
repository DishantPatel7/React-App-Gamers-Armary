import React from "react";
import b1 from "../Images/Best seller/b1.webp";
import b2 from "../Images/Best seller/b2.webp";
import b3 from "../Images/Best seller/b3.webp";
import b4 from "../Images/Best seller/b4.webp";
import b5 from "../Images/Controller/X2.jpg";
import b6 from "../Images/Best seller/b6.webp";
import b7 from "../Images/console/CO4.jpg";
import Head from "../Header/header";
import { Link, ScrollRestoration } from "react-router-dom";

import { useCart } from "../Context/CartContext";

const Bestsellers = () => {
  const { addToCart } = useCart();
  const productsData = [
    { id: 29, img: b1, name: "Mach Gaming Chair", price: "₹12000" },
    { id: 30, img: b2, name: "X-2 Wireless", price: "₹2500" },
    { id: 30, img: b3, name: "Headphone XD200", price: "₹2399" },
    { id: 30, img: b4, name: "Sparun Mechanical keyboard", price: "₹2000" },
    { id: 26, img: b5, name: "Raptor", price: "₹5099" },
    { id: 28, img: b6, name: "Wave", price: "₹2199" },
    { id: 24, img: b7, name: "PS5", price: "₹45,049" },
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
                    <button onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="Products-R"><product/></div> */}
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Bestsellers;
