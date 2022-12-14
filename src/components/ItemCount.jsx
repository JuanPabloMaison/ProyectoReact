import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const ItemCount = ({ onAdd, initial, stock }) => {
  const [cantidad, setCantidad] = useState(initial);
  const añadirProducto = (num) => {
    setCantidad(cantidad + num);
  };
  return (
    <ItemContainer>
      <div className="count-container">
        <div className="count-container_contador">
          <Button
            variant="contained"
            onClick={() => añadirProducto(-1)}
            disabled={cantidad === initial}
            className="count-container_button"
          >
            -
          </Button>
          <span className="count-container_cantidad">{cantidad}</span>
          <Button
            variant="contained"
            onClick={() => añadirProducto(+1)}
            disabled={cantidad === stock}
            className="count-container_button"
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          onClick={() => {
            onAdd(cantidad);
          }}
          disabled={stock === 0 ? true : null}
          className="button-primary"
        >
          Añadir
        </Button>
      </div>
    </ItemContainer>
  );
};

export default ItemCount;

const ItemContainer = styled.div`
  button {
    border: none;
    background: none;
  }
  .button-primary {
    background: linear-gradient(#a73737, #7a2828);
    border: none;
    font-weight: 700;
    font-size: 1rem;
    margin: 20px auto;
    width: 112px;
    height: 36px;
    cursor: pointer;
  }

  .count-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .count-container_contador {
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    width: 140px;
    height: 50px;
    font-weight: 60;
    font-size: 1.4rem;
    margin: 40px auto 0;
  }

  .count-container_button {
    color: #7a2828;
    width: 100%;
    height: 100%;
    border: 1px solid #555555;
    font-size: 1.6rem;
    transition: all 25ms ease-out;
  }

  .count-container_button:hover {
    border: none;
    color: #ffffff;
    background-color: #7a2828;
  }

  .count-container_cantidad {
    text-align: center;
    height: 100%;
    padding-top: 10px;
    color: black;
    font-weight: 500;
  }
`;
