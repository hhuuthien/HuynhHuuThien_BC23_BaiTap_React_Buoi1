import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="py-5">
        <div className="container">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold">A warm welcome!</h1>
              <p className="fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam unde possimus aspernatur quia harum necessitatibus aliquam illo, ab porro neque esse
                expedita qui, ea corrupti voluptates! Suscipit veritatis animi minima, odit laudantium aperiam vitae alias odio tenetur quae maxime?
              </p>
              <a className="btn btn-primary btn-lg" href="#!">
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
