import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import SearchBar from './Search';
import { useState } from 'react';

const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  width: 100%;
`;

function Navbar() {
  const [selected, setSelected] = useState('');

  return (
    <>
      <Nav>
        <SearchBar />
        <div style={{ gridColumn:6 }}>
        <Filter selected={selected} setSelected={setSelected} /></div>
        <Filter selected={selected} setSelected={setSelected} />
      </Nav>
      <hr style={{ color: 'red',
        backgroundColor: 'grey',
        height: '1px' }}/>
    </>
  );
}

export default Navbar;
