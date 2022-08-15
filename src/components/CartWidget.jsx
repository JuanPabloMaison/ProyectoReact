import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CartWidget = () => {
  return (
    <DivContainer>
      <div className="cart-widget">
        <FontAwesomeIcon icon={faCartShopping} size="lg" color="white" />
        <div className="qty-display">1</div>
      </div>
    </DivContainer>
  );
};

export default CartWidget;

const DivContainer = styled.div`
  .cart-widget {
    position: relative;
    cursor: pointer;
    text-align: right;
    margin-top: 0;
  }
  .qty-display {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: white;
    border-radius: 50%;
    font-size: 12px;
    text-align: center;
    line-height: 17px;
  }
`;
