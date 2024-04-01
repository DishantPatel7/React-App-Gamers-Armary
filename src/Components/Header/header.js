import "./header.css";
import logo from "../Images/Screenshot_2024-03-31_154600111-removebg-preview.png";
function Head() {
  return (
    <>
    <div id="header">
      <header>
        <div>
          {/* <a href="">
            <img src={logo} alt="" />
          </a> */}
          <a href="">Gamer's Armary</a>
        </div>
        <div>
          <a href="">Games</a><a href="">Category</a> <a href="">Deals</a> 
          <a href="">
            <i class="ri-search-line"></i>
          </a>
          <a href="">
            <i class="ri-shopping-cart-line"></i>
          </a>
          <a href="./HTML/login.html">
            <i class="ri-user-line"></i>
          </a>
          <a href=""><i class="ri-more-2-fill"></i></a>
          {/* Contacts ,Support , About Us,news*/}
        </div>
      </header>
      </div>
    </>
  );
}
export default Head;
