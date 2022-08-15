import React, { Component } from "react";
import "./index.css";
import logo from "./img/logo.ico";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={logo} alt=""></img>
        <div className="social-icons-container">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="social-icon"
          ></a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="social-icon"
          ></a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            className="social-icon"
          ></a>
        </div>
        <ul className="footer-menu-container">
          <li onClick={() => alert("Legal")} className="menu-item">Legal</li>
          <li onClick={() => alert("Cookies")} className="menu-item">Cookies</li>
          <li onClick={() => alert("Privacy")} className="menu-item">Privacy</li>
          <li onClick={() => alert("Shipping")} className="menu-item">Shipping</li>
          <li onClick={() => alert("Refounds")} className="menu-item">Refounds</li>
        </ul>
        <span className="copyright">
          &copy;2022, LabeX 42. All rights reserved.
        </span>
      </footer>
    );
  }
}
