// import "./header.css";
import "./header2.css";
import logo from "../Images/Screenshot_2024-03-31_154600111-removebg-preview.png";
import { Link } from "react-router-dom";
function Head() {
  function showSlidebar() {
    document.querySelector(".sidebar").style.display = "flex";
  }
  function hideSidebar() {
    document.querySelector(".sidebar").style.display = "none";
  }
  return (
    <>
      <div id="header">
        <header>
          <nav>
            <ul class="sidebar">
              <li onclick={hideSidebar}>
                <a href="#">
                  <i class="ri-close-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="dropdown">
                    <button class="dropbtn">Games</button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="dropdown">
                    <button class="dropbtn">Category</button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="dropdown">
                    <button class="dropbtn">Deals</button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="dropdown">
                    <button class="dropbtn">
                      <i class="ri-search-line"></i>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="dropdown">
                    <button class="dropbtn">
                      <i class="ri-shopping-cart-line"></i>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="dropdown">
                    <button class="dropbtn">
                      <i class="ri-user-line"></i>
                    </button>
                  </div>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="dropdown">
                    <button class="dropbtn">
                      <i class="ri-more-2-fill"></i>
                    </button>
                    <div class="dropdown-content dropdown-content-last">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/React-App-Gamers-Armary">
                  Gamer's Armary
                </Link>
              </li>
              <li class="hideOnMobile">
                <Link to="/games">
                  <div class="dropdown">
                    <button class="dropbtn">Games</button>
                    <div class="dropdown-content">
                      <Link to="/">Action</Link>
                      <Link to="/">Racing</Link>
                      <Link to="/">Shooter</Link>
                      <Link to="/">Simulation</Link>
                    </div>
                  </div>
                </Link>
              </li>
              <li class="hideOnMobile">
                <Link to="./">
                  <div class="dropdown">
                    <button class="dropbtn">Products</button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </Link>
              </li>
              <li class="hideOnMobile">
                <Link to="./">
                  <div class="dropdown">
                    <button class="dropbtn">Deals</button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </Link>
              </li>
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
                    <button class="dropbtn">
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
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
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
          </nav>
        </header>
      </div>
    </>
  );
}
export default Head;
