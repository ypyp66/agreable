import React from "react";
import reactDom from "react-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Modal() {
  const state = useSelector((state) => state.toast);
  const globalPortal = document.getElementById("portal");

  return reactDom.createPortal(
    state.isOpen ? <Container>✔</Container> : "",
    globalPortal
  );
}

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 10%;
  left: 45%;

  width: 100px;
  height: 100px;

  border: 3px solid green;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: xx-large;
  color: green;
  background-color: white;
  opacity: 0.5;

  @media ${(props) => props.theme.tablet} {
    top: 30%;
    left: 40%;
    width: 80px;
    height: 80px;
  }
`;
