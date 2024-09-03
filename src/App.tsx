import React, { useState } from "react";
import IBANInput from "./components/IBANInput";
import ValidationHistory from "./components/ValidationHistory";
import { validateIban } from "./lib/utils";
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
const App: React.FC = () => {
  const [iban, setIban] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [history, setHistory] = useState<IBANHistory[]>([]);

  const handleValidate = (iban: string): void => {
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
      <IBANInput onValidate={handleValidate} iban={iban} isValid={isValid} />
      <ValidationHistory history={history} />
    </Container>
  );
};

export default App;
