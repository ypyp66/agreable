import CartItem from "Components/CartItem";
import useLocalStorage from "Hooks/useLocalStorage";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

function Cart() {
  const [cartStates, setCartStates] = useLocalStorage("cart");
  const isMobile = useMediaQuery({ query: "(min-width:900px)" });

  useEffect(() => {
    console.log(cartStates);
  }, [cartStates]);

  const handleToggle = (id) => {
    const result = cartStates.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setCartStates(result);
  };

  const handleRemove = (id) => {
    const result = cartStates.filter((item) => item.id !== id);
    setCartStates(result);
  };

  const handleIncrease = (id) => {
    const result = cartStates.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setCartStates(result);
  };

  const handleDecrease = (id) => {
    const result = cartStates.map((item) =>
      item.id === id
        ? {
            ...item,
            amount: item.amount - 1,
          }
        : item
    );
    setCartStates(result);
  };

  const totalPrice = () => {
    const result = cartStates.reduce((acc, cur) => {
      if (!cur.isChecked) return acc;
      return acc + cur.price * cur.amount;
    }, 0);

    return result;
  };

  return (
    <>
      <h3>장바구니</h3>
      <Container>
        <ItemLists>
          {cartStates.length === 0 && <div>Nothing Better</div>}
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
              <h3>{totalPrice()}원</h3>
            </div>
            <button>결제하기</button>
          </Purchase>
        )}
      </Container>
      {!isMobile && (
        <Purchase>
          <div>
            <h4>결제 예정 금액 </h4>
            <h3>{totalPrice()}원</h3>
          </div>
          <button>결제하기</button>
        </Purchase>
      )}
    </>
  );
}

export default React.memo(Cart);

const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 10px;

  @media ${(props) => props.theme.tablet} {
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
