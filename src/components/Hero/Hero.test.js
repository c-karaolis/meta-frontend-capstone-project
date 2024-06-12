import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";

test("renders Hero component", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );

  expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  expect(screen.getByText("New York")).toBeInTheDocument();
  expect(screen.getByText("Reserve a table")).toBeInTheDocument();
  expect(screen.getByAltText("Restarurant food")).toBeInTheDocument();
});
