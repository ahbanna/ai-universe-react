import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import "./Card.css";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools").then((res) =>
      res.json().then((data) => setData(data.data.tools))
    );
  }, []);

  return (
    <div className="single-card">
      {data.map((singleData) => {
        // console.log(singleData.name);
        return <SingleData singleData={singleData}></SingleData>;
      })}
    </div>
  );
};

export default Card;
