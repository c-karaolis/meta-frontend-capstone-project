import React from "react";
import { render, screen } from "@testing-library/react";
import Lore from "./Lore";

describe("Lore component", () => {
  test("renders the Lore component", () => {
    render(<Lore />);

    const title = screen.getByText("Little Lemon");
    expect(title).toBeInTheDocument();
    const subtitle = screen.getByText("New York");
    expect(subtitle).toBeInTheDocument();
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });
});
