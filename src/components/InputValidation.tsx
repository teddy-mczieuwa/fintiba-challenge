import React from "react";
import styled from "styled-components";
import { MediaQuery } from "../devices";

interface InputValidationProps {
  isValid: Boolean | null;
}

const InputValidationContainer = styled.div`
  height: 2rem;
  text-align: center;
  @media ${MediaQuery.laptop}, ${MediaQuery.tablet} {
    margin-top: 8rem;
  }

  @media ${MediaQuery.mobile} {
    margin-top: 3.5rem;
  }
`;

const InputValidationSuccess = styled.div`
  color: green;
  font-family: Arial, Helvetica, sans-serif;
`;

const InputValidationError = styled.div`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
`;

const InputValidation: React.FC<InputValidationProps> = ({ isValid }) => {
  return (
    <InputValidationContainer>
      {isValid === null ? (
        ""
      ) : isValid ? (
        <InputValidationSuccess>Valid IBAN</InputValidationSuccess>
      ) : (
        <InputValidationError>Invalid IBAN</InputValidationError>
      )}
    </InputValidationContainer>
  );
};

export default InputValidation;
