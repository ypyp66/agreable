import React from "react";
import { ITEM_URL } from "Constants/ListItem";
import styled from "styled-components";

function ListItem(props) {
  const { id, itemName, price, image } = props.data;
  const { handleAdd } = props;

  return (
    <Container>
      <img
        src={`${ITEM_URL}${image}`}
        alt="itemImage"
        width={"100%"}
        onClick={() => handleAdd(props.data)}
      />
      <div>
        <h5>{itemName}</h5>
        <strong>{price}원</strong>
      </div>
    </Container>
  );
}

export default ListItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
  }
`;
