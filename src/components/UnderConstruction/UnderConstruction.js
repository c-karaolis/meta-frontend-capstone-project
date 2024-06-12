import React from "react";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  return (
    <div className="under-construction" style={{ height: "55vh" }}>
      <h1>Under Construction</h1>
      <p>
        We're working hard to finish the development of this site. Our target
        launch date is
        <strong> Soon!</strong>
      </p>
      <p>
        <strong>
          For this project only Home and Reservations pages were required to be
          implemented!
        </strong>
      </p>
    </div>
  );
};

export default UnderConstruction;
