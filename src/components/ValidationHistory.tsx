import React from "react";
import styled from "styled-components";
import { MediaQuery } from "../devices";

interface ValidationHistoryProps {
  history: { iban: string; isValid: boolean; date: Date }[];
}

const HistoryContainer = styled.div`
  margin: 0 auto;
  padding: 0 0.5rem;
  overflow-y: scroll;
  height: 40rem;

  @media ${MediaQuery.laptop} {
    width: 20%;
    margin-top: 0.5rem;
  }

  @media ${MediaQuery.tablet} {
    width: 35%;
  }

  @media ${MediaQuery.mobile} {
    width: 80%;
    margin-top: 1rem;
  }
`;

const HistoryTitle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-bottom: 0.8rem;
  @media ${MediaQuery.laptop} {
    padding-top: 2%;
  }

  @media ${MediaQuery.tablet} {
    padding-top: 2%;
  }

  @media ${MediaQuery.mobile} {
    padding-top: 10%;
  }
`;

const HistoryList = styled.ul`
  list-style: none;
  border-radius: 10px;
`;

const HistoryItem = styled.li`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  border-radius: 10px;
  height: 4rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
`;

const HistoryItemIBAN = styled.p`
  font-weight: 600;
  margin-bottom: 15px;
`;

const HistoryItemValidity = styled("span")<{ $isvalid: Boolean }>`
  display: inline-block;
  padding: 0.2rem 0.4rem;
  color: white;
  font-size: 0.8rem;
  border-radius: 5px;
  background-color: ${(p) => (p.$isvalid ? "green" : "red")};
`;

const HistoryItemDate = styled.span`
  display: inline-block;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
`;
const HistoryItemTime = styled.span`
  display: inline-block;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
`;

const NoHistory = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: #555;
  text-align: center;
  background-color: #ccc;
`;

const ValidationHistory: React.FC<ValidationHistoryProps> = ({ history }) => {
  const renderTime = (value: any) => {
    const [date, time] = value.date.toLocaleString().split(",");
    return (
      <>
        <HistoryItemDate>{date}</HistoryItemDate>
        <HistoryItemTime>{time}</HistoryItemTime>
      </>
    );
  };
  return (
    <>
      <HistoryTitle>Validation History</HistoryTitle>
      <HistoryContainer>
        <HistoryList>
          {history.length > 0 ? (
            history.map((value, index) => (
              <HistoryItem key={index}>
                <HistoryItemIBAN>{value.iban}</HistoryItemIBAN>
                <HistoryItemValidity $isvalid={value.isValid}>
                  {value.isValid ? "Valid" : "Invalid"}
                </HistoryItemValidity>
                {renderTime(value)}
              </HistoryItem>
            ))
          ) : (
            <NoHistory>No History</NoHistory>
          )}
        </HistoryList>
      </HistoryContainer>
    </>
  );
};

export default ValidationHistory;
