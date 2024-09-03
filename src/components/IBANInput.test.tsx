import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import IBANInput from "./IBANInput";

describe("IBANInput component", () => {
  const onValidateMock = jest.fn();

  beforeEach(() => {
    onValidateMock.mockClear();
  });

  it("should render correctly with the given IBAN value", () => {
    render(
      <IBANInput
        onValidate={onValidateMock}
        iban="ME25505000012345678951"
        isValid={null}
        suggestion={null}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter Montenegro IBAN");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("ME25505000012345678951");
  });

  it("should call onValidate function when input value changes", async () => {
    render(
      <IBANInput
        onValidate={onValidateMock}
        iban=""
        isValid={null}
        suggestion={null}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter Montenegro IBAN");

    await userEvent.type(inputElement, "me123");

    expect(onValidateMock).toHaveBeenCalled();
  });

  it("should display the correct label", () => {
    render(
      <IBANInput
        onValidate={onValidateMock}
        iban=""
        isValid={null}
        suggestion={null}
      />
    );

    const labelElement = screen.getByLabelText("IBAN");
    expect(labelElement).toBeInTheDocument();
  });
});
