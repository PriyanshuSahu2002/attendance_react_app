import React from "react";
import styled from "styled-components";
import AttendanceDetailsCard from "../Components/AttendanceDetailsCard";
import Sheet from "../Components/Sheet";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Container = styled.div`
  padding-left: 10px;
  height: 100%;
`;

const Attendence = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar name ={"Student"}/>
      <AttendanceDetailsCard />
      <Sheet />
      <Sheet />
      <Sheet />
      <Sheet />
    </Container>
  );
};

export default Attendence;
