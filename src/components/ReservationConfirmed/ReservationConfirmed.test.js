import React from "react";
import { render, screen } from "@testing-library/react";
import ReservationConfirmed from "./ReservationConfirmed";

test("renders confirmation message", () => {
  render(<ReservationConfirmed />);

  expect(
    screen.getByText("Your reservation has been confirmed.")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Thank you for chosing Little Lemon.")
  ).toBeInTheDocument();
});
