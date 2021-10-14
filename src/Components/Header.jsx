import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const cartStates = useSelector((state) => state.cart);
  const isMobile = useMediaQuery({ query: "(max-width:900px)" });

  return (
    <header>
      <Cart>
        {isMobile && (
          <IMG>
            <Link to="/">
              <img
                src="https://image.wingeat.com/logo/images/we_logo_center.png"
                alt="LOGO"
              />
            </Link>
          </IMG>
        )}
        <Link to="/cart">
          <Amount>{cartStates.length}</Amount> 장바구니
        </Link>
      </Cart>
      {!isMobile && (
        <IMG>
          <Link to="/">
            <img
              src="https://image.wingeat.com/logo/images/we_logo_center.png"
              alt="LOGO"
            />
          </Link>
        </IMG>
      )}
    </header>
  );
}

export default React.memo(Header);

const Cart = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  text-align: right;
  line-height: 16px;
  padding: 10px;

  @media ${(props) => props.theme.tablet} {
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-between;
  }
`;

const IMG = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  @media ${(props) => props.theme.tablet} {
    display: block;
    img {
      width: 150px;
    }
  }
`;

const Amount = styled.span`
  border-radius: 50px;
  padding: 2px 5px;

  background-color: red;
  color: white;
`;
