import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import AttendanceDetailsCard from "../Components/AttendanceDetailsCard";
import Sheet from "../Components/Sheet";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MiddleNavBar from "../Components/MiddleNavBar";

const Container = styled.div`
  padding-left: 10px;
  height: 100%;
`;
const Wrapper = styled.div`
  height: ${props => props.screenY/1.7}px;
  overflow-y: scroll;
  margin-bottom: 100px;
`;
const ScrollWa = styled.div`
  overflow-y: scroll;
  height: 100%;
`;
const Attendence = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    setScrollTop(containerRef.current.scrollTop);
  };
  return (
    <Container>
      <Sidebar />
      <Navbar name={"Student"} />
      <ScrollWa>
        <AttendanceDetailsCard />
        <MiddleNavBar />

        <Wrapper ref={containerRef} screenY = {window.screen.height} onScroll={handleScroll}>
          <Sheet />
          <Sheet />
          <Sheet />
          <Sheet />
          <Sheet />
          <Sheet />
          <Sheet />
          <Sheet />
          <Sheet />
          <Sheet />
          <Sheet />
          <Sheet />
        </Wrapper>
      </ScrollWa>
    </Container>
  );
};

export default Attendence;
