import React, { Component } from "react";
import Banner from "./Banner.jsx";
import Item from "./Item.jsx";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />

        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-2">
              <Item />
            </div>
            <div className="col-md-3 mt-2">
              <Item />
            </div>
            <div className="col-md-3 mt-2">
              <Item />
            </div>
            <div className="col-md-3 mt-2">
              <Item />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
