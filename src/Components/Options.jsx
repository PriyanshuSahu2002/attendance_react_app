import React from "react";
import styled from "styled-components";

const OptionsList = styled.div`
display: flex;
flex-wrap: wrap;
`

const Option = styled.span`
margin:10px;

padding: 10px;
padding-bottom: 4px;
color: #848DA1;
font-size: 18px;
font-weight: 500;
cursor: pointer;
&:hover {
    color: black;
    border-bottom: 2px solid #5A98FC;
    font-weight: 600;
    font-size: 20px;
  }
`
const Options = () => {
  return (
    <OptionsList>
        <Option>Over All </Option>
        <Option> By Date</Option>
    </OptionsList>
  )
}



export default Options