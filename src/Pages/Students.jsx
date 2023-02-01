import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StudentHeader from '../Components/StudentHeader';

const Container = styled.div`

padding-left: 10px;
height: 100%;
`;
const styles = {
    textDecoration: 'none',
    color:'inherit'
  }

const Student = () => {
    
    return (
    <Container > 
        <StudentHeader/> 
    </Container>
    );
}

export default Student