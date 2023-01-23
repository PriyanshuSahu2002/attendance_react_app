import React from 'react'
import styled from 'styled-components'
import icon from '../Image/user.png'

const Container = styled.div`
    display: flex;

    width: 350px;
    padding: 10px;
    margin:5px 20px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
`
const Icon = styled.img`
width: 50px;
height: 50px;
padding: 5px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

const Title = styled.span`
margin-left: 10px;
font-weight: 500;
color: rgb(152,159,176);
`


const Value = styled.span`
margin-left: 10px;
font-size: 30px;
color: #1a1a1b;
`
const AttendanceDetailsCardItems = () => {
  return (
    <Container>
      <Icon src={icon}/>
    <Wrapper>
    <Title>Total Student</Title>
      <Value>400</Value>
    </Wrapper>
    </Container>
  )
}

export default AttendanceDetailsCardItems