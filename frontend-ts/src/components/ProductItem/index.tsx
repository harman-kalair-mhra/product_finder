import React, { useState, FormEvent } from "react";
import IProduct from "../../models/product";
import styled from "styled-components";

const StyledProductItem = styled.div`
  color: green;
  font-size: 18px;
  background-color: #f5f5dc;
  font-weight: 900
  border-style: solid;
  margin: 10px;
  padding: 10px;
`;

const Styledbutton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);9);
  border-radius: 8px
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
      <br />
      <Styledbutton type="button" onClick={handleclick}>
        Select
      </Styledbutton>
    </StyledProductItem>
  );
};

export default ProductItem;
