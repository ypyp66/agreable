import useLocalStorage from "Hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getLists } from "Utils/Api";
import FetchMore from "./FetchMore";
import ListItem from "./ListItem";

function Lists() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const [cartStates, setCartStates] = useLocalStorage("cart");

  const handleAdd = (data) => {
    const check = cartStates.filter((item) => item.id === data.id).length > 0;

    if (check) {
      alert("이미 장바구니에 있습니다. 수량을 증가합니다.");
      setCartStates(
        cartStates.map((item) =>
          item.id === data.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
      return;
    }

    data.amount = 1;
    data.isChecked = true;

    setCartStates(cartStates.concat(data));
  };

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
  justify-content: center;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    align-items: center;
  }
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
