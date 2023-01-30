import React from "react";
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

const Attendence = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar name={"Student"} />
      <AttendanceDetailsCard/>
      <MiddleNavBar/>
      <Sheet/>
      <Sheet/>
      <Sheet/>
      <Sheet/>
      <Sheet/>
      <Sheet/>
      <Sheet/>
    </Container>
  );
};

export default Attendence;
