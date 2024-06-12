import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Testing Button component", () => {
  test("Check if button displays the correct label", () => {
    const label = "Press me";
    render(<Button title={label} />);
    const buttonItem = screen.getByText(label);
    expect(buttonItem).toBeInTheDocument();
  });

  test("Check if onClick function is triggered when button is pressed", () => {
    const onClickTest = jest.fn();
    render(<Button title="Press me" onClick={onClickTest} />);
    const buttonItem = screen.getByText("Press me");
    fireEvent.click(buttonItem);
    expect(onClickTest).toHaveBeenCalledTimes(1);
  });

  test('Check if default form submission is prevented when button type is not "submit"', () => {
    const onSubmitTest = jest.fn();
    render(
      <form onSubmit={onSubmitTest}>
        <Button title="Send" type="button" />
      </form>
    );

    const buttonItem = screen.getByText("Send");
    fireEvent.click(buttonItem);
    expect(onSubmitTest).not.toHaveBeenCalled();
  });
});
