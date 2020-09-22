import React, { useState, FormEvent } from "react";
import IProduct from "../../models/product";
import styled from "styled-components";

const StyledProductItem = styled.div`
  color: green;
  font-size: 18px;
  background-color: #f5f5dc;
  font-weight: 900
  border-style: solid;
  margin: 20px;
  padding: 10px;
`;

interface IProductItem {
  item: IProduct;
}

const ProductItem: React.FC<IProductItem> = (props) => {
  function handleclick() {
    console.log("It's Working");
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plNumber: props.item.plNumber,
        name: props.item.name,
        dose: props.item.dose,
        substance: props.item.substance,
        customerId: "c9c5b059-4afd-4201-a478-5a36bd2fbc61",
      }),
    };
    fetch("/order", requestOptions);
  }
  return (
    <StyledProductItem>
      <p>PLNumber: {props.item.plNumber}</p>
      <p>Name: {props.item.name}</p>
      <p>Dose: {props.item.dose}</p>
      <p>Substance: {props.item.substance}</p>
      <a href={props.item.url}>CLICK FOR INFORMATION</a>
      <button type="button" onClick={handleclick}>
        Select
      </button>
    </StyledProductItem>
  );
};

export default ProductItem;
