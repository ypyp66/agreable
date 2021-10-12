import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useLocalStorage from "Hooks/useLocalStorage";

function Header() {
  const [cartStates, _] = useLocalStorage("cart");

  const totalLength = () => {
    return cartStates.length;
  };

  return (
    <header>
      <Cart>
        <Link to="/cart">
          <Amount>{totalLength()}</Amount> 장바구니
        </Link>
      </Cart>
      <IMG>
        <Link to="/">
          <img
            src="https://image.wingeat.com/logo/images/we_logo_center.png"
            alt="LOGO"
          />
        </Link>
      </IMG>
    </header>
  );
}

export default Header;

const Cart = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  text-align: right;
  line-height: 16px;
  padding: 10px;
`;

const IMG = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Amount = styled.span`
  border-radius: 50px;
  padding: 2px 5px;

  background-color: red;
  color: white;
`;
