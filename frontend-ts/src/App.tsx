import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import ProductSearch from "./components/ProductSearch/index";
import ProductSelect from "./components/ProductSelect/index";

function App() {
  let [basket, setBasket] = useState<string[]>([]);

  const updateBasket = (product: string) => {
    basket.push(product);
    setBasket(basket);
  };

  useEffect(() => {
    fetch("/hello")
      .then((response) => response.json())
      .then((response) => console.log(response));
  });

  return (
    <div className="App">
      <ProductSelect name="Paracetamol" onSubmit={updateBasket} />
      <ProductSelect name="Nabilone" onSubmit={updateBasket} />
      <ProductSelect name="Ramipril" onSubmit={updateBasket} />
      <ProductSelect name="Ibugel gel" onSubmit={updateBasket} />
    </div>
  );
}

export default App;
