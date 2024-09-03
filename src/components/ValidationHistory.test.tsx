import React from "react";
import { render, screen } from "@testing-library/react";
import ValidationHistory from "./ValidationHistory";

const mockHistory = [
  { iban: "ME25505000012345678951", isValid: true, date: new Date() },
  { iban: "INVALID_IBAN", isValid: false, date: new Date() },
];

describe("ValidationHistory", () => {
  it("renders validation history items", () => {
    render(<ValidationHistory history={mockHistory} />);

    const ibanElements = screen.getAllByText(
      /ME25505000012345678951|INVALID_IBAN/i
    );
    expect(ibanElements.length).toBe(2);

    const validElement = screen.getByText(/^Valid$/i);
    const invalidElement = screen.getByText(/^Invalid$/i);

    expect(validElement).toHaveStyle("background-color: green");
    expect(invalidElement).toHaveStyle("background-color: red");
  });

  it("displays 'No History' when history is empty", () => {
    render(<ValidationHistory history={[]} />);

    const noHistoryElement = screen.getByText(/No History/i);
    expect(noHistoryElement).toBeInTheDocument();
  });

  it("renders correct date and time format", () => {
    render(<ValidationHistory history={mockHistory} />);

    const dateElement = screen.getAllByText(/2024/i);
    expect(dateElement).toHaveLength(2);

    const timeElement = screen.getAllByText(/\d{1,2}:\d{2}:\d{2}/i);
    expect(timeElement).toHaveLength(2);
  });
});
