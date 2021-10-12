import React from "react";
import { Route, Switch } from "react-router";
import Cart from "Pages/Cart";
import Home from "Pages/Home";
import Header from "Components/Header";
import styled from "styled-components";

function Routes() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Container>
  );
}

export default Routes;

const Container = styled.main`
  margin: 0 100px;
`;
