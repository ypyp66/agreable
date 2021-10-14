import React from "react";
import { Route, Switch } from "react-router";
import Cart from "Pages/Cart";
import Home from "Pages/Home";
import Header from "Components/Header";
import { BrowserRouter } from "react-router-dom";
import Modal from "Modal/Modal";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
      <Modal />
    </>
  );
}

export default Routes;
