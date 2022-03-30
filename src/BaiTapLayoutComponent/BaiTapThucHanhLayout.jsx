import React, { Component } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
