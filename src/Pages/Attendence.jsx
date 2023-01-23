import React from 'react'
import styled from 'styled-components'
import AttendanceDetailsCard from '../Components/AttendanceDetailsCard'
import Sheet from '../Components/Sheet'


const Container = styled.div`
display: flex;
flex-direction: column;
`

const Attendence = () => {
    return (
        <Container>
            <AttendanceDetailsCard/>
            <Sheet /> 
            <Sheet />
            <Sheet />
            <Sheet />
            <Sheet />
            <Sheet />
            <Sheet />
        </Container>
    )
}

export default Attendence