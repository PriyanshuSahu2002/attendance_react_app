import React from 'react'
import styled from 'styled-components'
import Sheet from '../Components/Sheet'


const Container = styled.div`
display: grid;
gap: 1rem;
`

const Attendence = () => {
    return (
        <Container>
            <Sheet /> 
            <Sheet />
            <Sheet />
            <Sheet />
            <Sheet />
            <Sheet />
            <Sheet />
        </Container>
    )
}

export default Attendence