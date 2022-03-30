import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-header">
          <img src="https://picsum.photos/500" alt="..." className="w-100" />
        </div>
        <div class="card-body text-center">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, officiis facilis magnam mollitia reiciendis error?</p>
        </div>
        <div class="card-footer text-muted text-center">
          <button className="btn btn-primary">Find out more</button>
        </div>
      </div>
    );
  }
}
