import React from "react";
import styled from "styled-components";
import { MediaQuery } from "../devices";
import InputValidation from "./InputValidation";

interface IBANInputProps {
  onValidate: (iban: string) => void;
  iban: string;
  isValid: Boolean | null;
}

const InputContainer = styled.div`
  margin: 0 auto;
  position: absolute;
  width: 20rem;
  display: flex;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  @media ${MediaQuery.mobile} {
    top: 9%;
    transform: translate(-50%, -50%);
  }
  @media ${MediaQuery.laptop} {
    top: 15%;
    transform: translate(-50%, -50%);
  }

  @media ${MediaQuery.tablet} {
    transform: translateY(-80);
  }
  left: 50%;
`;
const InputLabel = styled.label``;

const Input = styled.input`
  padding: 10px 2px;
  width: 15rem;
  border-radius: 5px;
  border: none;
  text-align: center;
`;

const IBANInput: React.FC<IBANInputProps> = ({ onValidate, iban, isValid }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onValidate(e.target.value.toUpperCase());
  };

  return (
    <>
      <InputContainer>
        <InputLabel htmlFor="iban">IBAN</InputLabel>
        <Input
          type="text"
          id="iban"
          value={iban}
          onChange={handleChange}
          placeholder="Enter Montenegro IBAN"
          maxLength={22}
        />
      </InputContainer>
      <InputValidation isValid={isValid} />
    </>
  );
};

export default IBANInput;
