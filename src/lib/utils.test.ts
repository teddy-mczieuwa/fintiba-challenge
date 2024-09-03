import { validateIban } from "./utils";

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
