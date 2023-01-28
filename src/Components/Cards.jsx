import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { db } from "../Image/Utility/firebase-config.js";
import { onValue, ref } from "firebase/database";

const Wraper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 100px;
`;

function Cards() {
  let data = [
    {
      sub_name: "Compiler Design",
      year: "4th Year",
      teacher: "Priyanshu",
      date: new Date(2022, 11 - 1, 28),
    },
  ];

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const query = ref(db, "4 CSE");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((datas) => {
          setClasses((classes) => [...classes, datas]);
        });
      }
    });
  }, []);
  return (
    <>
      <Wraper>
        {classes.map((a) => {
          return (
            <Card
              sub_name={a.subject}
              year={a.collegeYear}
              teacher={a.teacherName}
              date={data[0].date}
              percentage={95}
            ></Card>
          );
        })}
      </Wraper>
    </>
  );
}

export default Cards;
