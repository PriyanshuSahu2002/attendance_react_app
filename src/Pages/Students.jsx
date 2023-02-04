import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar';
import StudentHeader from "../Components/StudentHeader";
import Sheet from "../Components/Sheet";
import StudentMiddleComponent from "../Components/StudentSubjectsOptions";

const Container = styled.div`
  padding-left: 10px;
  height: 100%;
`;
const styles = {
  textDecoration: "none",
  color: "inherit",
};

const Student = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar name={"Dashboard"} />
      <StudentHeader />
      <StudentMiddleComponent/>
      <Sheet/>
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

export default Student;
