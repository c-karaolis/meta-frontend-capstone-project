import React from "react";
import "./TestimonialsCard.css";
import starRatingIcon from "../../images/star-rating.svg";

const TestimonialsCard = ({ author, description, image, rating }) => {
  return (
    <div className="testimonials-card" data-testid="testimonials-card">
      <div className="testimonials-card-container">
        <img
          className="testimonials-card-profile-picture"
          src={image}
          alt="author"
          height={50}
        ></img>

        <p className="testimonials-card-author">{author}</p>
      </div>
      <div className="testimonials-card-rating">
        {rating &&
          [...Array(rating)].map((_, index) => (
            <img
              key={index}
              src={starRatingIcon}
              alt="star"
              height={15}
              width={15}
            />
          ))}
      </div>
      <p className="testimonials-card-description">{description}</p>
    </div>
  );
};

export default TestimonialsCard;
