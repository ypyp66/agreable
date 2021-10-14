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
          <Price>{price}원</Price>
          <div>
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
        </div>
      </Item>
    </Container>
  );
}

export default React.memo(CartItem);

const Container = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid #e3e3e3;

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

  > div {
    @media ${(props) => props.theme.tablet} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

const IMG = styled.img`
  margin-right: 10px;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }
`;
