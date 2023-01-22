import React from 'react'
import styled from 'styled-components'
import Img from '../Image/img.jpg'
const Container = styled.div`
    display: flex;
    justify-content: left;
    margin: 10px;
`
const Icon = styled.img`
    width: 20px;
    height: 20px;

`
const Label = styled.span`
margin-left: 10px;
`
const SideBarItems = () => {
  return (
    <Container>
        <Icon src={Img}/>
        <Label>Home</Label>
    </Container>
  )
}

export default SideBarItems