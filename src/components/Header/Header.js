import React from "react";
// import App from "../../App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Shop from "../Shop/Shop";
import Home from "../Home/Home";
import About from "../About/About";
import Service from "../Service/Service";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header_search">
          <img src="../../assets/images/logo.gif" alt="logoCake" />
          <div className="header_search--form">
            <p>My Account</p>
            <p>Help</p>
            <p>Sign in</p>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/shop">The Pastry Shop</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>

            <Route exact path="/" component={Home}></Route>
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={About}></Route>
            <Route path="/service" component={Service}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/contact" component={Contact}></Route>
          </nav>
        </Router>

        <div>
          <ul>
            <li>cheese cakes</li>
            <li>sponge cakes</li>
            <li>butter cakes</li>
            <li>layer cakes</li>
            <li>sheet cakes</li>
            <li>cupcakes</li>
            <li>fondant cakes</li>
            <li>swiss roll</li>
            <li>other desserts</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
