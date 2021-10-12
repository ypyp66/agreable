import React from "react";
import { Route, Switch } from "react-router";
import Cart from "Pages/Cart";
import Home from "Pages/Home";
import Header from "Components/Header";

function Routes() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default Routes;
