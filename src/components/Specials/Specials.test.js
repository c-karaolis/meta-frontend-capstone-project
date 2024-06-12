import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Specials from "./Specials";

describe("Specials component", () => {
  test("renders Specials component", () => {
    render(
      <MemoryRouter>
        <Specials />
      </MemoryRouter>
    );
    const specialsElement = screen.getByText("Specials");
    expect(specialsElement).toBeInTheDocument();
  });

  test("renders SpecialsCard component", () => {
    render(
      <MemoryRouter>
        <Specials />
      </MemoryRouter>
    );
    const specialsCardElement = screen.getByText("Greek salad");
    expect(specialsCardElement).toBeInTheDocument();
  });

  test("renders Button component", () => {
    render(
      <MemoryRouter>
        <Specials />
      </MemoryRouter>
    );
    const buttonElement = screen.getByText("Online Menu");
    expect(buttonElement).toBeInTheDocument();
  });
});
