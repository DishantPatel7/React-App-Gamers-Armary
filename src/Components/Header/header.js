// import "./header.css";
import "./header2.css";
import logo from "../Images/Screenshot_2024-03-31_154600111-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import H1 from "../Images/Headphones/H1.webp";

function Head() {
  function showSlidebar() {
    document.querySelector(".sidebar").style.display = "flex";
  }
  function hideSidebar() {
    document.querySelector(".sidebar").style.display = "none";
  }
  const [count, setCount] = useState(1);
  return (
    <>
      <header>
        <nav>
          <ul class="sidebar" id="sidebarID">
            <li onClick={hideSidebar}>
              <Link>
                <i class="ri-close-line"></i>
              </Link>
            </li>
            <li>
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">Games</button>
                  <div class="dropdown-content">
                    <Link to="./">Link 1</Link>
                    <Link to="./">Link 2</Link>
                    <Link to="./">Link 3</Link>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">Category</button>
                  <div class="dropdown-content">
                    <Link to="./">Link 1</Link>
                    <Link to="./">Link 2</Link>
                    <Link to="./">Link 3</Link>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">Deals</button>
                  <div class="dropdown-content">
                    <Link to="./">Link 1</Link>
                    <Link to="./">Link 2</Link>
                    <Link to="./">Link 3</Link>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="ri-search-line"></i>
                  </button>
                </div>
              </Link>
            </li>
            <li>
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="ri-shopping-cart-line"></i>
                  </button>
                </div>
              </Link>
            </li>
            <li>
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="ri-user-line"></i>
                  </button>
                </div>{" "}
              </Link>
            </li>
            <li>
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="ri-more-2-fill"></i>
                  </button>
                  <div class="dropdown-content dropdown-content-last">
                    <Link to="./">Link 1</Link>
                    <Link to="./">Link 2</Link>
                    <Link to="./">Link 3</Link>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/React-App-Gamers-Armary">Gamer's Armary</Link>
            </li>
            <li class="hideOnMobile">
              <Link to="/games">
                <div class="dropdown">
                  <button class="dropbtn">Games</button>
                  {/* <div class="dropdown-content">
                    <Link to="/">Action</Link>
                    <Link to="/">Racing</Link>
                    <Link to="/">Shooter</Link>
                    <Link to="/">Simulation</Link>
                  </div> */}
                </div>
              </Link>
            </li>
            <li class="hideOnMobile">
              <Link to="/Browseby">
                <div class="dropdown">
                  <button class="dropbtn">Products</button>
                  <div class="dropdown-content">
                    <Link to="/Accessories">Accessories</Link>
                    <Link to="/Best-Sellers">Best Sellers</Link>
                    <Link to="/Consoles">Consoles</Link>
                    <Link to="/Controllers">Controllers</Link>
                  </div>
                </div>
              </Link>
            </li>
            {/* <li class="hideOnMobile">
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">Deals</button>
                </div>
              </Link>
            </li> */}
            <li class="hideOnMobile">
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="ri-search-line"></i>
                  </button>
                </div>
              </Link>
            </li>
            <li class="hideOnMobile">
              <Link to="./">
                <div class="dropdown">
                  <button
                    class="dropbtn"
                    onClick={() => {
                      document.getElementById("Cart").style.display = "flex";
                    }}
                  >
                    <i class="ri-shopping-cart-line"></i>
                  </button>
                </div>
              </Link>
            </li>
            <li class="hideOnMobile">
              <Link to="/login2">
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="ri-user-line"></i>
                  </button>
                </div>
              </Link>
            </li>
            <li class="hideOnMobile">
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="ri-more-2-fill"></i>
                  </button>
                  <div class="dropdown-content dropdown-content-last">
                    <Link to="./">About Us</Link>
                    <Link to="/Contact Us">Contact Us</Link>
                  </div>
                </div>
              </Link>
            </li>
            <li onClick={showSlidebar}>
              <Link to="./">
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="ri-menu-fill"></i>
                  </button>
                </div>
              </Link>
            </li>
          </ul>
          {/* making add to cart */}
          <ul id="Cart">
            <div className="cartName">
              <button
                onClick={() => {
                  document.getElementById("Cart").style.display = "none";
                }}
              >
                <i class="ri-arrow-right-s-line"></i>
              </button>
              <h1>Cart</h1>
            </div>
            <div className="cart-info">
              <div className="cart-items-show">
                <div className="cart-item-img">
                  <img src={H1} alt="img" />
                </div>
                <div className="cart-product-info">
                  <div className="cart-item-name">JET GAMING HEADPHONE</div>
                  <div className="cart-item-price">₹799</div>
                  <div className="cart-item-addon-btn">
                    <button onClick={() => setCount((c) => Math.max(c - 1, 1))}>
                      -
                    </button>
                    <p>{count}</p>
                    <button onClick={() => setCount((c) => c + 1)}>+</button>
                  </div>
                </div>
              </div>
              <div className="subtotal-price">
                Subtotal:<span> ₹799</span>
              </div>
              <hr />
              <div className="view-cart-btn">
                <Link to="/Cart">
                  <button>View Cart</button>
                </Link>
              </div>
            </div>
          </ul>
          {/* <ul id="search">
          </ul> */}
        </nav>
      </header>
    </>
  );
}
export default Head;
