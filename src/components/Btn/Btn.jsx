import React from "react";

const Btn = (props) => {
  const { children } = props;
  return (
    <div>
      <button className="btn btn-danger">{children}</button>
    </div>
  );
};

export default Btn;
