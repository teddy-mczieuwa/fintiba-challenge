import { validateIban, suggestCorrectIBAN } from "./utils";

describe("validateIban", () => {
  test("validates a correct Montenegro IBAN", () => {
    expect(validateIban("ME25505000012345678951")).toBe(true);
    expect(validateIban("ME92596723335691512416")).toBe(true);
    expect(validateIban("ME37793854946825213639")).toBe(true);
  });

  test("invalidates an incorrect Montenegro IBAN (wrong length)", () => {
    expect(validateIban("ME2550500001234567895")).toBe(false);
  });

  test("invalidates an incorrect Montenegro IBAN (wrong country code)", () => {
    expect(validateIban("XX25505000012345678951")).toBe(false);
  });

  test("invalidates an incorrect Montenegro IBAN (wrong check digits)", () => {
    expect(validateIban("ME25505000012345678952")).toBe(false);
  });
});

describe("suggestCorrectIBAN", () => {
  const validIBANs = [
    "ME25505000012345678951",
    "ME25510000001234567894",
    "ME25522000001123456783",
    "ME25520000001123456704",
    "ME25503000001234567812",
  ];

  test("returns the exact IBAN if it matches one of the valid IBANs", () => {
    const userInputIBAN = "ME25505000012345678951";
    expect(suggestCorrectIBAN(userInputIBAN, validIBANs)).toBe(
      "ME25505000012345678951"
    );
  });

  test("suggests the closest IBAN when there is one typo", () => {
    const userInputIBAN = "ME25505000012345678950";
    expect(suggestCorrectIBAN(userInputIBAN, validIBANs)).toBe(
      "ME25505000012345678951"
    );
  });

  test("suggests the closest IBAN when multiple valid IBANs are similar", () => {
    const userInputIBAN = "ME25510000001234567895";
    expect(suggestCorrectIBAN(userInputIBAN, validIBANs)).toBe(
      "ME25510000001234567894"
    );
  });

  test("returns the closest IBAN even with multiple differences", () => {
    const userInputIBAN = "ME25510000001123456780";
    expect(suggestCorrectIBAN(userInputIBAN, validIBANs)).toBe(
      "ME25510000001234567894"
    );
  });

  test("returns null if there are no valid IBANs", () => {
    const userInputIBAN = "ME25505000012345678951";
    expect(suggestCorrectIBAN(userInputIBAN, [])).toBe(null);
  });

  test("returns the closest IBAN even with length differences", () => {
    const userInputIBAN = "ME2550500001234567895";
    expect(suggestCorrectIBAN(userInputIBAN, validIBANs)).toBe(
      "ME25505000012345678951"
    );
  });
});
