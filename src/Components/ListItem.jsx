import { ITEM_URL } from "Constants/ListItem";
import React from "react";
import styled from "styled-components";

function ListItem(props) {
  const { id, itemName, price, image } = props.data;
  return (
    <Container>
      <img src={`${ITEM_URL}${image}`} alt="itemImage" width="250px" />
      <div>
        <h5>{itemName}</h5>
        <p>{price}원</p>
      </div>
    </Container>
  );
}

export default ListItem;

const Container = styled.div``;
