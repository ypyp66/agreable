import React from "react";
import styled from "styled-components";
import { IMAGE_BASE_URL } from "Constants/Image";

function ListItem(props) {
  const { itemName, price, image } = props.data;
  const { handleAdd } = props;

  return (
    <Container>
      <img
        src={IMAGE_BASE_URL + image}
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
  justify-items: center;
`;
