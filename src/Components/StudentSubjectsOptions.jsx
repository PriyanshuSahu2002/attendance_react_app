import { React, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
justify-content: space-between;
`;
const Option = styled.span`
  margin: 10px;
  margin-top: 0px;
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 4px;
  color: ${(props) => (props.selected ? '#000' : '#848da1')};
  font-size: ${(props) => (props.selected ? 20 : 18)}px;
  font-weight: ${(props) => (props.selected ? 600 : 500)};
  border-bottom: ${(props) => (props.selected ? '2px solid #5A98FC' : 'none')};
  cursor: pointer;
  &:hover {
    color: black;
    border-bottom: 2px solid #5A98FC;
    font-weight: 600;
    font-size: 20px;
  }
`;

const StudentMiddleComponent = () => {
  const [selected, setSelectedOption] = useState("option1");

  const handleChange = (event) => {
    setSelectedOption(event);
  };
  return (
    <Container>
      <Option
        selected={selected === "option1"}
        onClick={() => handleChange("option1")}
      >
        Quantum Mechanics
      </Option>
      <Option
        selected={selected === "option2"}
        onClick={() => handleChange("option2")}
      >
        Game Theory
      </Option>
      <Option
        selected={selected === "option3"}
        onClick={() => handleChange("option3")}
      >
        R Programming
      </Option>
      <Option
        selected={selected === "option4"}
        onClick={() => handleChange("option4")}
      >
        Cyber Security
      </Option>
      <Option
        selected={selected === "option5"}
        onClick={() => handleChange("option5")}
      >
        Mathmatics
      </Option>
    </Container>
  );
};

export default StudentMiddleComponent;

// color: 'black',
// borderBottom: '2px solid #5A98FC',
// fontWeight:' 600',
// fontSize: '20px',
