import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: blue;
  font-size: 80px;
`;

export default function ProductSearch() {
  return (
    <form>
      {" "}
      <label>
        SEARCH:
        <input type="text" name="products" id="products" />
      </label>
      <input type="submit" value="SEARCH" />
    </form>
  );
}
