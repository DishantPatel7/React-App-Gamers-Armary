import React from "react";
import X1 from "../Images/Controller/X1.jpg";
import X2 from "../Images/Controller/X2.jpg";
import X3 from "../Images/Controller/X3.jpg";
import X4 from "../Images/Controller/X4.jpg";

import Head from "../Header/header";
import { Link, ScrollRestoration } from "react-router-dom";

import { useCart } from "../Context/CartContext";
const Controllers = () => {
  const { addToCart } = useCart();
  const productsData = [
    {
      id: 25,
      img: X1,
      name: "Ghost",
      price: "₹1299",
    },
    { id: 26, img: X2, name: "Raptor", price: "₹5099" },
    { id: 27, img: X3, name: "Fint", price: "₹1199" },
    { id: 28, img: X4, name: "Wave", price: "₹2199" },
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
              <p>Controllers</p>
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
            <h1>Controllers</h1>
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

export default Controllers;
