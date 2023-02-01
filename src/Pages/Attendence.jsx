import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import AttendanceDetailsCard from "../Components/AttendanceDetailsCard";
import Sheet from "../Components/Sheet";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Options from "../Components/Options";
import MiddleNavBar from "../Components/MiddleNavBar";

const Container = styled.div`
  padding-left: 10px;
  height: 100%;
`;
const Wrapper = styled.div`
  height: 350px;
  overflow-y: scroll;

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
      <AttendanceDetailsCard />
      <MiddleNavBar />
      <Wrapper ref={containerRef} onScroll={handleScroll}>
        <Sheet />
        <Sheet />
        <Sheet />
        <Sheet />
        <Sheet />
        <Sheet />
        <Sheet />
      </Wrapper>
    </Container>
  );
};

export default Attendence;
