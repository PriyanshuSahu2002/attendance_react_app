import React from 'react'
// import Card from '../Components/Card'
// import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar';
// import Cards from '../Components/Cards'
import Attendence from './Attendence'


const Container = styled.div`

  margin: 10px;
  margin-right: 20px;
  padding: 5px;
`;

const Home = () => {
    return (
        <Container>
            {/* <Navbar />
            <Cards />    */}
            <Sidebar/>
            <Attendence/>
        </Container>
    )
}

export default Home