import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialsCard from "./TestimonialsCard";

describe("TestimonialsCard component", () => {
  const mockProps = {
    author: "John Doe",
    description: "This is a test description",
    image: "test-image.jpg",
    rating: 5,
  };

  test("renders TestimonialsCard component", () => {
    render(<TestimonialsCard {...mockProps} />);
    const cardElement = screen.getByTestId("testimonials-card");
    expect(cardElement).toBeInTheDocument();
  });

  test("renders author name", () => {
    render(<TestimonialsCard {...mockProps} />);
    const authorElement = screen.getByText(mockProps.author);
    expect(authorElement).toBeInTheDocument();
  });

  test("renders correct number of stars for rating", () => {
    render(<TestimonialsCard {...mockProps} />);
    const starElements = screen.getAllByAltText("star");
    expect(starElements.length).toEqual(mockProps.rating);
  });
});
