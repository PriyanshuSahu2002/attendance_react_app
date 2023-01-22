import React from 'react'
import styled from 'styled-components'
import Img from '../Image/img.jpg'


const Container = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
`

const Pack = styled.div`
display:flex;

`

const CoverImg = styled.img`
    width: 35px;
    border-radius: 50px;
`
const Name = styled.div`
    margin-left: 30px;
    font-weight: bold;
`
const Attendance = styled.div`
color: red;
font-weight: bold;

`
const Stream = styled.div`
color: darkslateblue;
font-weight: bold;
`
const Year = styled.div`
color: blueviolet;
font-weight: bold;
`
const Detail = styled.a`
color: blue;
font-weight: bold;
`

const Sheet = () => {
    return (
        <Container>
            <Pack>
            <CoverImg src={Img} alt="Article Cover" />
            <Name>Name</Name></Pack>
            <Attendance>Present</Attendance>
            <Stream>Stream</Stream>
            <Year>Year</Year>
            <Detail>link</Detail>
        </Container>
    )
}

export default Sheet