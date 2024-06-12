import React from "react";
import "./Testimonials.css";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";

const testimonials = [
  {
    id: 1,
    author: "James Smith",
    description:
      "The pasta at Little Lemon was cooked to perfection, with a rich and creamy sauce that was simply divine.",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-daniel-xavier-614810.jpg&fm=jpg",
    rating: 5,
  },
  {
    id: 2,
    author: "Emily Johnson",
    description:
      "The pizza at Little Lemon was a delightful experience, with its thin crust and generous toppings.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5,
  },
  {
    id: 3,
    author: "Michael Williams",
    description:
      "The steak at Little Lemon was cooked just right, with a beautiful sear and a juicy interior, absolutely perfect.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialsCard
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
