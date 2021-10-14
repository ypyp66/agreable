import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getLists } from "Utils/Api";
import { addCart } from "Modules/cart";
import FetchMore from "./FetchMore";
import ListItem from "./ListItem";
import { toggleToast } from "Modules/toast";

function Lists() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const dispatch = useDispatch();

  const handleAdd = useCallback((data) => {
    dispatch(addCart(data));
    dispatch(toggleToast());
  }, []);

  useEffect(() => {
    if (isLast) return;

    (async function () {
      try {
        const result = await getLists(page);

        if (result.length === 0) {
          setIsLast(true);
        }

        setData((prev) => [...prev, ...result]);
      } catch (e) {
        setError(e);
      }
    })();
  }, [page, isLast]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Container>
        <Title>윙잇 MADE</Title>
        {data.length > 0 && (
          <Inner>
            {data.map((list) => (
              <ListItem key={list.id} data={list} handleAdd={handleAdd}>
                {list.itemName}
              </ListItem>
            ))}
          </Inner>
        )}
      </Container>
      {isLast ? (
        <div>마지막 컨텐츠입니다.</div>
      ) : (
        <FetchMore setPage={setPage} />
      )}
    </>
  );
}

export default React.memo(Lists);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h1`
  margin: 50px 0px;
`;

const Inner = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  justify-content: space-between;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    grid-template-columns: repeat(2, 45%);
    justify-items: center;
  }
`;
