import React from 'react'
import styled from 'styled-components'
import Img from '../Image/img.jpg'


const Container = styled.div`
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    border-radius: 5px;
    margin:10px 20px;
`

const Pack = styled.div`
display:flex;
align-items: center;
`

const CoverImg = styled.img`
    width: 35px;
    border-radius: 50px;
`
const Name = styled.div`
margin-left: 10px;
        color:black;
    font-weight: 600;
`
const Attendance = styled.div`
background-color: #d3fcc0;
border: 0px solid;
border-radius: 20px;
padding: 5px;
font-weight: bold;
`

const AttendanceText = styled.span`
padding: 10px;
color: #03db03;
font-weight: 600;
`
const Stream = styled.div`
color: black;
font-weight: 500;
`
const Year = styled.div`
color: black;

font-weight: 500;
`
const Detail = styled.a`
color: #3b83ff;
font-weight: 700;
margin-right: 20px;

`

const Sheet = () => {
    return (
        <Container>
            <Pack>
            <CoverImg src={Img} alt="Article Cover" />
            <Name>Priyanshu Sahu</Name></Pack>
            <Attendance><AttendanceText>Present</AttendanceText></Attendance>
            <Stream>CSE</Stream>
            <Year>4</Year>
            <Detail>See Student Detail</Detail>
        </Container>
    )
}

export default Sheet