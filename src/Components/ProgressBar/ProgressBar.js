import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Pbar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < props.percentage) {
        setPercentage(percentage + 1);
      }
    }, 25);
  }, [percentage, props.percentage]);

  return (
    <div style={{ width: 100, marginLeft: 70 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}
