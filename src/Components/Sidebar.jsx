import React from 'react'
import styled from 'styled-components'
import SideBarItems from './SideBarItems'


const Container = styled.div`
    float: left;
    border: 1px solid;
    width: 250px;
    height: ${props=>props.sizeY}px;
    background-color: white;
    position: relative;
    overflow-x: hidden;
    z-index: 1;
    top: 0;
    padding-top: 20px  ;
    left: 0;
`
const Sidebar = () => {
  return (
    <Container sizeY = {window.innerHeight}>
        <SideBarItems/>
        <SideBarItems/>
        <SideBarItems/>
        <SideBarItems/>
        <SideBarItems/>
        <SideBarItems/>
        <SideBarItems/>
    </Container>
  )
}

export default Sidebar