import React from 'react'
import styled from 'styled-components'
import SideBarItems from './SideBarItems'
import {AiTwotoneDashboard} from 'react-icons/ai'
import {FaFileAlt} from 'react-icons/fa'
import {BiLibrary} from 'react-icons/bi'
import {MdLibraryBooks} from 'react-icons/md'
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
const Sidebar = () =>{
 let styling = {color: '#b7a1a1', marginLeft: '10px'};
 let fontSize = {fontSize: '20px'};
  return (
    <Container sizeY = {window.innerHeight}>
        <SideBarItems name = "Dashboard" icon = {<AiTwotoneDashboard style={fontSize}/>} />
        <h5 style = {styling} >Test</h5>
        <SideBarItems name = "Items" icon = {<BiLibrary style={fontSize} />} />
        <SideBarItems name = "Exams" icon = {<FaFileAlt style={fontSize} />} />
        <h5 style = {styling}>Organize</h5>
        <SideBarItems name = "Courses" icon = {<MdLibraryBooks style={fontSize} />} />
        <SideBarItems name = "Courses Subscription" icon = {<MdSubscriptions style={fontSize} />} />
        <SideBarItems name = "Students" icon = {<FaUserGraduate style={fontSize} />} />
        <SideBarItems name = "Private Groups" icon = {<HiUserGroup style={fontSize} />} />
        <h5 style = {styling}>Manage</h5>
        <SideBarItems name = "User" icon = {<BsFillPersonFill style={fontSize} />} />
        <SideBarItems name = "Configuration" icon = {<RiUserSettingsLine style={fontSize} />} />
    </Container>
  )
}

export default Sidebar