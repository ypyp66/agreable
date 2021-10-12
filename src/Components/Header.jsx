import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <nav>
      <Cart>
        <Link to="/cart">장바구니</Link>
      </Cart>
      <IMG>
        <img
          src="https://image.wingeat.com/logo/images/we_logo_center.png"
          alt="LOGO"
        />
      </IMG>
    </nav>
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
