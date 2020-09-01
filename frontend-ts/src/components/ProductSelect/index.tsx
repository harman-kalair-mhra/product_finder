import React, { useState, FormEvent } from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: blue;
  font-size: 80px;
`;
interface IProductSelectProps {
  name: string;
  onSubmit: (product: string) => void;
}
export default function ProductSelect(props: IProductSelectProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(props.name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">{props.name}</button>;
    </form>
  );

  //       <div>
  //         <h2>Searched Products</h2>
  //         {searchedProducts.map((product) => (
  //           <p>{product}</p>
  //         ))}
  //       </div>
  //     </div>
  //   );
}
