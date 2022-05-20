import styled from "styled-components";

const StyledTriceps = styled.div`
  font-family: "Koulen", cursive;
  color: ${(props) => props.theme.tricepsColor};
  font-size: 40px;
`;

const Triceps = () => {
  return <StyledTriceps> Triceps </StyledTriceps>;
};

export default Triceps;
