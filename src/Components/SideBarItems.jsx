import React from 'react'
import styled from 'styled-components'
import {DiDatabase} from 'react-icons/di' 
import {BiLibrary} from 'react-icons/bi'
import {FcDocument} from 'react-icons/fc'

const Container = styled.div`

`
const Box1 = styled.div`
display:flex;
justify-content: left;
margin-left: 10px;
box-shadow: 0px 3px 3px rgba(0, 0, 0, 2%);
height: 35px;

`
const Icon = styled.i`
`
const Label = styled.span`
margin-left:10px;
`
const H5 = styled.h5`
margin: 30px 0px 0px 10px;
color: darkgray;
`

const Box2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 9fr;
    row-gap: 20px;
    margin: 20px 0px 0px 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 2%);
    height:90px;
`

const SideBarItems = () => {
  return (
    <Container>
      <Box1>
        <Icon><DiDatabase style={{color: 'mediumslateblue', fontSize: '23px'}} /></Icon>
        <Label> DashBoard</Label>
      </Box1>
    </Container>
  )
}

export default SideBarItems