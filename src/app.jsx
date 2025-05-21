import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";

class App extends Component {
  state = {};
  render() {
    return ( <div className="app-container">
      <Navbar />
      <div className="products-container">
      <Product description="Füge das Produkt zu deine Warenkorb hinzu!" img="./assets/img/tomato.jpg" title="Tomaten"/>
      <Product description="Füge das Produkt zu deine Warenkorb hinzu!" img="./assets/img/cucumber.jpg" title="Gurken"/>
      <Product description="Füge das Produkt zu deine Warenkorb hinzu!" img="./assets/img/mushrooms.jpg" title="Pilze"/>
      <Product description="Füge das Produkt zu deine Warenkorb hinzu!" img="./assets/img/apples.jpg" title="Äpfel"/>
      <Product description="Füge das Produkt zu deine Warenkorb hinzu!" img="./assets/img/pear.jpg" title="Birnen"/>
      <Product description="Füge das Produkt zu deine Warenkorb hinzu!" img="./assets/img/bananas.jpg" title="Bananen"/>
      </div>

      </div> );
  }
}

export default App;
