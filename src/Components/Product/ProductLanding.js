import Head from "../Header/header";
import "./ProductLanding.css";
import React, { useEffect, useState } from "react";
import H11 from "../Images/Headphones/H11.webp";
import H12 from "../Images/Headphones/H12.webp";
import H13 from "../Images/Headphones/H13.webp";
import H14 from "../Images/Headphones/H14.webp";
import { Link } from "react-router-dom";
import Foot from "../Footer/footer";
import { ScrollRestoration } from "react-router-dom";

import { useParams } from "react-router-dom";
import { items } from "../BrowseBy/Data";

const ProductLanding = () => {
  const [count, setCount] = useState(1);

  // for filter according to the product
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    // console.log(filterProduct)
    setProduct(filterProduct[0]);
  }, [id]);

  return (
    <>
      <Head />
      <div id="ProductLanding">
        <div className="ProductLanding-content">
          <div id="header">
            <Link to="/React-App-Gamers-Armary">Home</Link>
            <p>/ {product.name}</p>
          </div>
          <div className="ProLand-1">
            <div className="ProLand-1-L">
              <div className="ProLand-sm-img">
                <img src={product.img} alt="sm-img" />
                <img src={product.img2} alt="sm-img" />
                <img src={product.img3} alt="sm-img" />
                <img src={product.img4} alt="sm-img" />
                <img src={product.img5} alt="sm-img" />
                {/* <img src={H15} alt="sm-img" /> */}
              </div>
              <div className="ProLand-img">
                <img src={product.img} alt="ProLand-img" id="IDProLand-img" />
              </div>
            </div>
            <div className="ProLand-1-R">
              <h1>{product.name}</h1>
              {/* <h1>JET GAMING HEADPHONE</h1> */}

              <h3>
                {product.price}
                <span>₹ 1,699.00</span>
              </h3>
              <hr />
              <p>40mm Neodymium Drivers | 2 Mtr Braided Cable | Flexible Mic</p>
              <p>Quantity:</p>
              <div className="btn-increament">
                <button onClick={() => setCount((c) => Math.max(c - 1, 1))}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
              </div>
              <div className="btn-Add-Buy">
                <Link to="/Browseby">
                  <button>ADD TO CART</button>
                </Link>
                <Link to="/Browseby">
                  <button>BUY IT NOW</button>
                </Link>
              </div>
              <h4>Check Delivery Availability</h4>
              <div className="pinCode-check">
                <input type="text" placeholder="Postal code e.g. 600010" />
                <button>CHECK</button>
              </div>
            </div>
          </div>
          <div className="ProLand-2">
            <div className="ProLand-2-head">
              <p>DESCRIPTION</p>
            </div>
            <hr />
            <div className="DESCRIPTION">
              <h2>FEATURES</h2>
              <ul>
                <li>Gaming Headphone with Multicolor lights</li>
                <li>Lightweight design with suspension headband</li>
                <li>Ear cup with LED Lights</li>
                <li>40mm Neodymium drivers</li>
                <li>Extra soft ear cushion for comfort</li>
                <li>Flexible Mic</li>
              </ul>
              <h2>SPECIFICATIONS</h2>
              <table>
                <tr>
                  <td>Driver Size </td>
                  <td>40mm </td>
                </tr>
                <tr>
                  <td>Speaker Impedance </td>
                  <td>32Ω </td>
                </tr>
                <tr>
                  <td>Frequency Response </td>
                  <td>20Hz-20kHz </td>
                </tr>
                <tr>
                  <td>Sensitivity </td>
                  <td>120dB ± 3dB </td>
                </tr>
                <tr>
                  <td>Microphone Impedance </td>
                  <td>32Ω </td>
                </tr>
                <tr>
                  <td>Microphone Sensitivity </td>
                  <td>-38dB±3dB </td>
                </tr>
                <tr>
                  <td>Connector type </td>
                  <td>3.5mm + USB (for lights) </td>
                </tr>
                <tr>
                  <td>Cable length</td>
                  <td>2 Meters </td>
                </tr>
                <tr>
                  <td>Package Dimension (W x D x H) </td>
                  <td>200 x 110 x 225 mm </td>
                </tr>
                <tr>
                  <td>Net. Weight </td>
                  <td>283g </td>
                </tr>
                <tr>
                  <td>Country of Origin </td>
                  <td>Peoples Republic of China </td>
                </tr>
              </table>
              <table>
                <tr>
                  <th>PACKAGE CONTENTS</th>
                </tr>
                <tr>
                  <td>Headphone</td>
                  <td>1 U</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
      <Foot />
    </>
  );
};

export default ProductLanding;
