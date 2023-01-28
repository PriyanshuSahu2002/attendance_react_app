import React from 'react'
import styled from 'styled-components'
import SideBarItems from './SideBarItems'
import {AiTwotoneDashboard} from 'react-icons/ai'
import {FaFileAlt} from 'react-icons/fa'
import {BiLibrary} from 'react-icons/bi'
import {MdDashboard, MdLibraryBooks} from 'react-icons/md'
import {MdSubscriptions} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import {FaUserGraduate} from 'react-icons/fa'
import {RiUserSettingsLine} from 'react-icons/ri'

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
const Label = styled.h5`
  color:#6e6e6e ;
  
  margin: 20px 10px;
`
const Sidebar = () =>{
 
 let fontSize = {fontSize: '20px' ,color:'#777777'};
  return (
    <Container sizeY = {window.innerHeight}>
        <SideBarItems name = "Dashboard" icon = {<MdDashboard style={fontSize}/>} />
        <Label>Test</Label>
        <SideBarItems name = "Items" icon = {<BiLibrary style={fontSize} />} />
        <SideBarItems name = "Exams" icon = {<FaFileAlt style={fontSize} />} />
        <Label>Organize</Label>
        <SideBarItems name = "Courses" icon = {<MdLibraryBooks style={fontSize} />} />
        <SideBarItems name = "Courses Subscription" icon = {<MdSubscriptions style={fontSize} />} />
        <SideBarItems name = "Students" icon = {<FaUserGraduate style={fontSize} />} />
        <SideBarItems name = "Private Groups" icon = {<HiUserGroup style={fontSize} />} />
        <Label>Manage</Label>
        <SideBarItems name = "User" icon = {<BsFillPersonFill style={fontSize} />} />
        <SideBarItems name = "Configuration" icon = {<RiUserSettingsLine style={fontSize} />} />
    </Container>
  )
}

export default Sidebar