import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

test("renders form fields correctly", () => {
  render(
    <ReservationForm
      availableTimeslots={["18:00", "19:00"]}
      onSubmit={() => {}}
    />
  );

  expect(screen.getByLabelText("Date:")).toBeInTheDocument();
  expect(screen.getByLabelText("Time:")).toBeInTheDocument();
});

test("calls onSubmit with form data when form is submitted", () => {
  const handleSubmit = jest.fn();
  render(
    <ReservationForm
      availableTimeslots={["18:00", "19:00"]}
      onSubmit={handleSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText("Date:"), {
    target: { value: "2024-12-20" },
  });
  fireEvent.change(screen.getByLabelText("Time:"), {
    target: { value: "18:00" },
  });
  fireEvent.submit(screen.getByRole("button"));

  expect(handleSubmit).toHaveBeenCalledWith({
    date: "2024-12-20",
    time: "18:00",
    guests: 1,
    occasion: "",
  });
});
