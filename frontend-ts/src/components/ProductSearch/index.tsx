import React, { useState, FormEvent } from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: blue;
  font-size: 80px;
`;

export default function ProductSearch() {
  let [searchedProduct, setSearchedProduct] = useState("");
  let [searchedProducts, setSearchedProducts] = useState<string[]>([]);

  const updateProduct = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setSearchedProduct(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchedProducts.push(searchedProduct);
    setSearchedProducts(searchedProducts);
    setSearchedProduct("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        <label>
          SEARCH:
          <input
            type="text"
            name="products"
            id="products"
            value={searchedProduct}
            onChange={updateProduct}
          />
        </label>
        <input type="submit" value="SEARCH" />
      </form>
      <div>
        <h2>Searched Products</h2>
        {searchedProducts.map((product) => (
          <p>{product}</p>
        ))}
      </div>
    </div>
  );
}
