import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import CartItem from "Components/CartItem";
import {
  decreaseAmount,
  increaseAmount,
  removeCart,
  toggleCart,
} from "Modules/cart";

function Cart() {
  const cartStates = useSelector((state) => state.cart);
  const isMobile = useMediaQuery({ query: "(min-width:900px)" });
  const dispatch = useDispatch();

  const handleToggle = useCallback((id) => {
    dispatch(toggleCart(id));
  }, []);

  const handleRemove = useCallback((id) => {
    dispatch(removeCart(id));
  }, []);

  const handleIncrease = useCallback((id) => {
    dispatch(increaseAmount(id));
  }, []);

  const handleDecrease = useCallback((id) => {
    dispatch(decreaseAmount(id));
  }, []);

  const totalPrice = useCallback((carts) => {
    const result = carts.reduce((acc, cur) => {
      if (!cur.isChecked) return acc;
      return acc + cur.price * cur.amount;
    }, 0);

    return result;
  }, []);

  return (
    <>
      <Container>
        <h3>장바구니</h3>
        <Inner>
          <ItemLists>
            {cartStates.length === 0 && <div>장바구니가 비었습니다</div>}
            {cartStates.length > 0 &&
              cartStates.map((cart) => (
                <CartItem
                  key={cart.id}
                  data={cart}
                  handleToggle={handleToggle}
                  handleRemove={handleRemove}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                />
              ))}
          </ItemLists>
          {isMobile && (
            <Purchase>
              <div>
                <h4>결제 예정 금액 </h4>
                <h3>{totalPrice(cartStates)}원</h3>
              </div>
              <button>결제하기</button>
            </Purchase>
          )}
        </Inner>
      </Container>
      {!isMobile && (
        <Purchase>
          <div>
            <h4>결제 예정 금액 </h4>
            <h3>{totalPrice(cartStates)}원</h3>
          </div>
          <button>결제하기</button>
        </Purchase>
      )}
    </>
  );
}

export default React.memo(Cart);

const Container = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 10px;

  @media ${(props) => props.theme.tablet} {
    width: 100vw;
    grid-template-columns: repeat(2, 40%);
    padding-bottom: 160px;
  }
`;

const ItemLists = styled.div`
  @media ${(props) => props.theme.tablet} {
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
  }
`;

const Purchase = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  margin-left: 40px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;

    background-color: #f3f3f3;
    padding: 30px 10px;

    h3 {
      color: #e95427;
    }
  }

  button {
    margin-top: 20px;
    width: 80%;

    border: none;

    background-color: #e95427;
    padding: 10px 30px;
    color: white;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 150px;
    margin: 0 auto;

    position: fixed;
    bottom: 0;
    left: 0;

    background-color: white;
    justify-content: flex-end;

    button {
      margin-top: 0;
      width: 100%;
    }
  }
`;
