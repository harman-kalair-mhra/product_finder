import React, { useState, FormEvent } from "react";
import IProduct from "../../models/product";
import styled from "styled-components";

const StyledProductItem = styled.div`
  color: green;
  font-size: 13px;
  background-color: #f5f5dc;
  border: 3px solid black;
  align-items: center;
`;

interface IProductItem {
  item: IProduct;
}

const ProductItem: React.FC<IProductItem> = (props) => {
  return (
    <StyledProductItem>
      <p>PLNumber: {props.item.plNumber}</p>
      <p>Name: {props.item.name}</p>
      <p>Dose: {props.item.dose}</p>
      <p>Substance: {props.item.substance}</p>
      <a href={props.item.url}>CLICK FOR INFORMATION</a>
    </StyledProductItem>
  );
};

export default ProductItem;
