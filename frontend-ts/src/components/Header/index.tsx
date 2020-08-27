import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: blue;
  font-size: 80px;
`;
interface HeaderProps {
  agency: string;
}

export default function Header(props: HeaderProps) {
  return <StyledH1>Product Finder {props.agency}</StyledH1>;
}
