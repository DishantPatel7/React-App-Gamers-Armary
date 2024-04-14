import React from "react";
import { Link } from "react-router-dom";
const Products_L = () => {
  return (
    <>
      <div class="Products-L">
        <div>
          <Link to="/React-App-Gamers-Armary">
            Home<i class="ri-arrow-right-s-line"></i>
          </Link>
          <p>hello</p>
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
            {/* <Link to="/On-Sale">On Sale </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products_L;
