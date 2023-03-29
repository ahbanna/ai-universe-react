import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./SingleData.css";

const SingleData = (props) => {
  // console.log(props);
  const { image, features, published_in, name } = props.singleData;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <h5>Features</h5>
          <Card.Text>
            {features.map((feature, index) => (
              <p>
                {index + 1}. <span> </span>
                {feature}
              </p>
            ))}
          </Card.Text>
          <hr />
          <Card.Title>{name}</Card.Title>
          <div className="data-link">
            <div className="date">
              <span>
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              <p> {published_in}</p>
            </div>
            <div className="link">
              <a href="">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleData;
