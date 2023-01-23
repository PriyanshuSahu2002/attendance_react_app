import React from 'react'
import styled from 'styled-components'
import SideBarItems from './SideBarItems'
import {DiDatabase} from 'react-icons/di'
import {FcDocument} from 'react-icons/fc'
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

  return (
    <Container sizeY = {window.innerHeight}>
        <SideBarItems name = "Dashboard" icon = {<DiDatabase style={{fontSize: '23px'}} />} />
        <h5 style = {styling} >Test</h5>
        <SideBarItems name = "Items" icon = {<BiLibrary style={{fontSize: '23px'}} />} />
        <SideBarItems name = "Exams" icon = {<FcDocument style={{fontSize: '23px'}} />} />
        <h5 style = {styling}>Organize</h5>
        <SideBarItems name = "Courses" icon = {<MdLibraryBooks style={{fontSize: '20px'}} />} />
        <SideBarItems name = "Courses Subscription" icon = {<MdSubscriptions style={{fontSize: '20px'}} />} />
        <SideBarItems name = "Students" icon = {<FaUserGraduate style={{fontSize: '20px'}} />} />
        <SideBarItems name = "Private Groups" icon = {<HiUserGroup style={{fontSize: '20px'}} />} />
        <h5 style = {styling}>Manage</h5>
        <SideBarItems name = "User" icon = {<BsFillPersonFill style={{fontSize: '23px'}} />} />
        <SideBarItems name = "Configuration" icon = {<RiUserSettingsLine style={{fontSize: '23px'}} />} />
    </Container>
  )
}

export default Sidebar