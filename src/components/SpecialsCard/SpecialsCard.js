import React from "react";
import "./SpecialsCard.css";
import delivery from "../../images/delivery-icon.svg";

const SpecialsCard = ({ title, description, image, price }) => {
  return (
    <div className="specials-card">
      <div className="specials-card-image">
        <img src={image} alt="food" height={200}></img>
      </div>
      <div className="specials-card-body">
        <div className="specials-card-body-header">
          <div className="specials-card-body-title-header">
            <p className="specials-card-title">{title}</p>
            <p className="specials-card-price">{price}</p>
          </div>
          <p className="specials-card-description">{description}</p>
        </div>

        <div className="specials-card-delivery">
          <p className="specials-card-delivery-title">Order a delivery</p>
          <img src={delivery} alt="uber eats"></img>
        </div>
      </div>
    </div>
  );
};

export default SpecialsCard;
