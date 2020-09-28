import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: blue;
  font-size: 30px;
  background-color: lightblue;
  border: 2px solid lightblue;
  border-radius: 30px;
`;
interface HeaderProps {
  agency: string;
}

export default function Header() {
  return <StyledH1>ORDER YOUR DRUGS HERE!</StyledH1>;
}
