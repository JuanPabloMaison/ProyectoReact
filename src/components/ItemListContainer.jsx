import React from "react";
import styled from "styled-components";

const ItemListContainer = (props) => {
  return (
    <ItemContainer>
      <div>
        <p>{props.saludo}</p>
      </div>
    </ItemContainer>
  );
};

export default ItemListContainer;

const ItemContainer = styled.div`
  p {
    font-weight: bold;
    padding: 0.5rem;
  }
`;
