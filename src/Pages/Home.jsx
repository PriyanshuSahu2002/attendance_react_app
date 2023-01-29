import React from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar';
import Cards from '../Components/Cards'
import { Link } from "react-router-dom";


const Container = styled.div`

  margin: 5px;
  margin-right: 20px;
  padding: 5px;
`;

const Home = () => {
    return (
      <Container>
        <Navbar />
        <Sidebar />
        <Link to="attendance"><Cards /></Link>
      </Container>
    );
}

export default Home