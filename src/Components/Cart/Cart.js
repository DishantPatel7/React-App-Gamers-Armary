import React from "react";
import "./Cart.css";
import Head from "../Header/header";
import Footer from "../Footer/footer";

const Cart = () => {
  return (
    <>
    <Head/>
      <div className="Cartpage">
        <div className="Cartpage-details">
          <div className="ShoppingCart">
            <div className="ShoppingCart-header">
              <h1>Shopping Cart</h1>
              <h2>3 Items</h2>
            </div>
            <div className="PRODUCT-DETAILS-head">
              <h3>Product Details</h3>
              <h3>Quantity</h3>
              <h3>Price</h3>
              <h3>Total</h3>
            </div>
            <div className="PRODUCT-DETAILS">
              <div className="items-Details">
                <div className="item-img ">
                  <img src="" alt="" />
                </div>
                <div className="item-Data ">
                  <span>Iphone 6S</span>
                  <span>Apple</span>
                  <a href="#">Remove</a>
                </div>
              </div>
              <div className="increase-btn">
                <button>-</button>
                <input type="text" value="1" />
                <button>+</button>
              </div>
              <span className="Span"> ₹400.00</span>
              <span className="Span"> ₹400.00</span>
            </div>
            <a href="#" className="Continue">
              <svg viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>

          <div id="summary">
            <h1>Order Summary</h1>
            <div className="ITEMS">
              <span>ITEMS 3</span>
              <span> ₹590</span>
            </div>
            <div className="Shipping">
              <label>SHIPPING</label>
              <select>
                <option>Standard shipping - ₹10.00</option>
              </select>
            </div>
            <div className="PROMO-CODE">
              <label for="promo">PROMO CODE</label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button>APPLY</button>
            <div className="Total-cost">
              <div className="cost">
                <span>TOTAL COST</span>
                <span>₹600</span>
              </div>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
