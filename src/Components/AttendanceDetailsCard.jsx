
import React from 'react'
import styled from 'styled-components'
import AttendanceDetailsCardItems from './AttendanceDetailsCardItems'

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
  flex-wrap: wrap;
`

const AttendanceDetailsCard = () => {
  return (
    <Container>
      <AttendanceDetailsCardItems/>
      <AttendanceDetailsCardItems/>
      <AttendanceDetailsCardItems/>
      <AttendanceDetailsCardItems/>
      <AttendanceDetailsCardItems/>
      <AttendanceDetailsCardItems/>
      
    </Container>
  )
}

export default AttendanceDetailsCard