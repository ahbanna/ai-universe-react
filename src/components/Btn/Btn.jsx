import React from "react";

const Btn = (props) => {
  const { children } = props;
  return (
    <div className="text-center">
      <button className="btn btn-danger">{children}</button>
    </div>
  );
};

export default Btn;
