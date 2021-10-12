import React from "react";
import { Route, Switch } from "react-router";
import Cart from "Pages/Cart";
import Home from "Pages/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

export default Routes;
