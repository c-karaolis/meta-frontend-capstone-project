import React from "react";
import "./Lore.css";
import bruschettaImage from "../../images/restauranfood.jpg";
import restaurantImage from "../../images/restaurant.jpg";

const Lore = () => {
  return (
    <div className="lore">
      <div>
        <h1 className="lore-title">Little Lemon</h1>
        <h2 className="lore-subtitle">New York</h2>
        <p className="lore-description">
          Located in the vibrant core of New York, Little Lemon blends
          contemporary style with comforting tradition. Our varied, handcrafted
          menu, which includes delicious bruschettas, juicy burgers, and crisp
          Greek salads, reflects our conviction that cuisine is a form of art.
        </p>
      </div>
      <img
        className="lore-image-restaurant"
        src={restaurantImage}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="lore-image-bruschetta"
        src={bruschettaImage}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default Lore;
