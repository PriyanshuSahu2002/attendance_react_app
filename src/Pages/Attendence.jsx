import React from 'react'
import styled from 'styled-components'
import AttendanceDetailsCard from '../Components/AttendanceDetailsCard'
import Sheet from '../Components/Sheet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Container = styled.div`
  margin: 5px;
  margin-right: 20px;
  padding: 5px;
`;

const Attendence = () => {
    return (
      <Container>
        <Navbar />
        <Sidebar />
        <AttendanceDetailsCard />
        <Sheet />
        <Sheet />
        <Sheet />
        <Sheet />
      </Container>
    );
}

export default Attendence