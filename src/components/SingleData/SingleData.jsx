import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleData = (props) => {
  // console.log(props);
  const { image, features, published_in, name } = props.singleData;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{features}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleData;
