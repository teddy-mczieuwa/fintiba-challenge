import styled from "styled-components";

const SuggestionContainer = styled.div`
  width: 20%;
  margin: 0 auto;
  background-color: white;
  border-radius: 5px;
  margin-top: 0;
  padding-top: 0;
`;

const SuggestionTitle = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 0;
  text-align: center;
`;

const Suggestions = ({ suggestion }: any) => {
  return (
    <SuggestionContainer>
      <SuggestionTitle>Suggestion: {suggestion}</SuggestionTitle>
    </SuggestionContainer>
  );
};

export default Suggestions;
