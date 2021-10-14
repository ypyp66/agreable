import React from "react";
import styled from "styled-components";
import { IMAGE_BASE_URL } from "Constants/Image";

function CartItem(props) {
  const { id, itemName, image, price, amount, isChecked } = props.data;
  const { handleToggle, handleRemove, handleIncrease, handleDecrease } = props;

  return (
    <Container>
      <Title>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleToggle(id)}
          />
          <h5>{itemName}</h5>
        </label>
        <p onClick={() => handleRemove(id)}>❌</p>
      </Title>

      <Item>
        <IMG src={`${IMAGE_BASE_URL}${image}`} alt="itemImage" width="100px" />
        <div>
          <h3>{price}원</h3>
          <button onClick={() => handleIncrease(id)}>➕</button>
          {amount}
          <button
            onClick={() => {
              if (amount === 0) return;
              handleDecrease(id);
            }}
          >
            ➖
          </button>
        </div>
      </Item>
    </Container>
  );
}

export default React.memo(CartItem);

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  padding: 10px;

  label {
    display: flex;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
`;

const IMG = styled.img`
  margin-right: 10px;
`;
