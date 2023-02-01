import React from "react";
import styled from "styled-components";
import user from "../Image/user.png";

const Container = styled.div`
  display: flex;
  border-bottom: 2px solid gray;
  padding: 10px;

  margin: 20px;
  background-color: white;
  border-radius: 2px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  flex-direction: column;
  margin-left: 40px;

`;

const Top = styled.div`
font-size: 40px;
  font-weight: 700;
  letter-spacing: 1px;

`

const Right = styled.div`
  flex: 1;
`;

const Down = styled.div`
 flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;

const StudentData = styled.span`
padding: 10px;
`;

const CoverImg = styled.img`
  width: 100px;
  border-radius: 50px;
`;

export default function StudentHeader() {
  return (
    <Container>
      <Left>
        <Top><StudentData>Priyanshu sahu </StudentData></Top>
        <Down>
        <StudentData>RollNumber: 301202219032</StudentData>
        <StudentData>Year: 4th</StudentData>
        <StudentData>Course: CSE</StudentData>
        <StudentData>EnrollNumber: BH3553</StudentData>
        <StudentData>DOB: 20 sep 2001</StudentData>
        <StudentData>Gender: Male</StudentData>
        <StudentData>MobileNumber: 20292293843</StudentData>
        <StudentData>Email: Priyanshusahu@gmail.com </StudentData>
        </Down>
      </Left>
      <Right></Right>
      {/* <div><CoverImg src={user} alt="Article Cover" /></div> */}
    </Container>
  );
}
