import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="card" styles={{ width: "2rem" }}>
        <img src={this.props.img} className="card-img-top" alt="Tomaten" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href="/" className="btn btn-primary">
            100 Gramm hinzufügen
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
