import React from 'react'
import styled from 'styled-components'
import AttendanceDetailsCard from '../Components/AttendanceDetailsCard'
import Sheet from '../Components/Sheet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Container = styled.div`

`;

const Attendence = () => {
    return (
      <Container>
        <Sidebar />
        <Navbar />
        <AttendanceDetailsCard />
        <Sheet />
        <Sheet />
        <Sheet />
        <Sheet />
      </Container>
    );
}

export default Attendence