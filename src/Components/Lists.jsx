import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getLists } from "Utils/Api";
import FetchMore from "./FetchMore";
import ListItem from "./ListItem";

function Lists() {
  const { isLoading, error, data } = useQuery("lists", () => getLists(1));

  console.log({ data });
  return (
    <Container>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <Inner>
          {data.map((list) => (
            <ListItem key={list.id} data={list}>
              {list.itemName}
            </ListItem>
          ))}
        </Inner>
      )}
      {error && <div>error발생</div>}
      <FetchMore />
    </Container>
  );
}

export default Lists;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  column-gap: 20px;
  justify-content: space-between;
`;
