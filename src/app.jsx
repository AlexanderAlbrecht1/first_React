import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";

class App extends Component {
  state = {};
  render() {
    return ( <div className="app-container">
      <Navbar />
      <Product />
      </div> );
  }
}

export default App;
