import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import user from "../Image/user.png";
import im from "../Image/img.jpg";
const Container = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 10px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 2%);
  transition-duration: 0.3s;
  margin: 20px 20px;
  height: 30px;
  padding: 5px;
  align-items: center;

  &:hover {
    box-shadow: 0 6px 6px 0 #00000019;
    cursor: pointer;
    background-color: #4e4e4e;
  }
`;
const Icon = styled.i`
  margin-right: 10px;
  margin-top: 4px;
`;
const Label = styled.div``;

const SideBarItems = (props) => {
  return (
    <Container>
      <Icon>{props.icon}</Icon>
      <Label> {props.name}</Label>
    </Container>
  );
};

export default SideBarItems;
