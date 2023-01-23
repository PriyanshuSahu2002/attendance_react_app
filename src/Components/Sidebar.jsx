import React from 'react'
import styled from 'styled-components'
import SideBarItems from './SideBarItems'


const Container = styled.div`
    float: left;

    width: 250px;
    height: ${props=>props.sizeY}px;
    background-color: white;
    position: relative;
    overflow-x: hidden;
    z-index: 1;
    top: -5px;
    padding-top: 20px  ;
    left: -15px ;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
`
const Sidebar = () => {
  return (
    <Container sizeY = {window.innerHeight}>
        <SideBarItems/>
        <SideBarItems/>
        <SideBarItems/>
    </Container>
  )
}

export default Sidebar