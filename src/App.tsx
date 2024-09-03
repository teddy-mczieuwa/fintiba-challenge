import React, { useState } from "react";
import IBANInput from "./components/IBANInput";
import ValidationHistory from "./components/ValidationHistory";
import { validateIban, suggestCorrectIBAN } from "./lib/utils";
import styled from "styled-components";

interface IBANHistory {
  iban: string;
  isValid: boolean;
  date: Date;
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  margin-top: 0;
  padding-top: 0;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 0;
  text-align: center;
`;
const validIBANs = [
  "ME25505000012345678951",
  "ME71115289191969753931",
  "ME25273677988565748337",
  "ME56975893545516857574",
  "ME54484927725713139454",
];

const App: React.FC = () => {
  const [iban, setIban] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [history, setHistory] = useState<IBANHistory[]>([]);
  const [suggestion, setSuggestions] = useState<string | null>(null);

  const handleValidate = (iban: string): void => {
    const suggestedIbans = suggestCorrectIBAN(iban, validIBANs);
    setSuggestions(suggestedIbans);
    console.log("Did you mean:", suggestedIbans);

    setIban(iban);
    const result = validateIban(iban);
    setIsValid(result);

    if (iban.length === 22) {
      const newHistory = history.concat({
        iban,
        isValid: result,
        date: new Date(),
      });
      setHistory(newHistory);
    }
  };

  return (
    <Container>
      <Title>IBAN Checker</Title>
      <IBANInput
        onValidate={handleValidate}
        iban={iban}
        isValid={isValid}
        suggestion={suggestion}
      />
      <ValidationHistory history={history} />
    </Container>
  );
};

export default App;
