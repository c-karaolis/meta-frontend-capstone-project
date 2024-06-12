import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials from "./Testimonials";

describe("Testimonials component", () => {
  const mockTestimonials = [
    {
      id: 1,
      author: "John Doe",
      description: "This is a test description",
      image: "test-image.jpg",
      rating: 5,
    },
    {
      id: 2,
      author: "Jane Doe",
      description: "This is another test description",
      image: "test-image2.jpg",
      rating: 4,
    },
    {
      id: 3,
      author: "Jane Done",
      description: "This is another test description",
      image: "test-image2.jpg",
      rating: 5,
    },
  ];

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockTestimonials),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders correct number of TestimonialsCard components", async () => {
    render(<Testimonials />);
    const cardElements = await screen.findAllByTestId("testimonials-card");
    expect(cardElements.length).toEqual(mockTestimonials.length);
  });
});
