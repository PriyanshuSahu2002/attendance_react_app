import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display:flex;
justify-content: left;
margin-left: 10px;
// box-shadow: 0px 3px 3px rgba(0, 0, 0, 2%);
`
const Icon = styled.i`
`
const Label = styled.span`
margin-left:10px;
`

const SideBarItems = (props) => {
  return (
    <Container>
        <Icon>{props.icon}</Icon>
        <Label> {props.name}</Label>
    </Container>
  )
}

export default SideBarItems