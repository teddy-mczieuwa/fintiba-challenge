import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Suggestion from "./Suggestion";

describe("Suggestions Component", () => {
  test("renders the suggestion passed as a prop", () => {
    const suggestionText = "ME25505000012345678951";

    render(<Suggestion suggestion={suggestionText} />);

    const suggestionElement = screen.getByText(`Suggestion: ${suggestionText}`);
    expect(suggestionElement).toBeInTheDocument();

    expect(suggestionElement.tagName).toBe("P");
    expect(suggestionElement).toHaveStyle("text-align: center");
  });
});
