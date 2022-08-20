import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando es true, lo pasa a false y viceversa
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <h2>
          Travel<span>fy </span>
          <FontAwesomeIcon icon={faPlaneDeparture} size="lg" color="white" />
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a href="#h">Inicio</a>
          <a href="#h">Reservas</a>
          <a href="#h">About</a>
          <a href="#h">Contacto</a>
          <a href="#h">Dónde alojarse</a>
          <a href="#h">Agencias</a>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
        <CartWidget />
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background: linear-gradient(#a73737, #7a2828);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }

    @media (min-width: 768px) {
      position: initial;
      margin-right: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    transition: all 0.5s ease;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
