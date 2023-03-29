import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import "./Card.css";

const Card = () => {
  const [data, setData] = useState([]);

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools").then((res) =>
      res.json().then((data) => setData(data.data.tools))
    );
  }, []);

  return (
    <div>
      <div className="single-card">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => {
          // console.log(singleData.name);
          return (
            <SingleData
              singleData={singleData}
              key={singleData.id}
            ></SingleData>
          );
        })}
      </div>
      {!showAll && (
        <div className="text-center">
          <button className="btn btn-danger" onClick={handleShowAll}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
