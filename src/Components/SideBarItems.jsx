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
    box-shadow: 0 6px 6px 0 #c6c2c218;
    cursor: pointer;
  }
`;
const Icon = styled.img`
  width: 50px;

  height: 50px;
  background-repeat: no-repeat;
  border-radius: 0;
`;
const Label = styled.div``;

function changeicon(e, user) {
  e.target.style.backgroundImage =
    "https://miro.medium.com/max/2744/1*q2JJN3Y-82LKGvFFr2e8kw.png";
}

const SideBarItems = (props) => {
  const [image, setImage] = useState(user);
  return (
    <Container
      onMouseEnter={() => setImage(props.Icon)}
      onMouseLeave={() => setImage(user)}
    >
      <Icon src={image} />
      <Label> {props.name}</Label>
    </Container>
  );
};

export default SideBarItems;
