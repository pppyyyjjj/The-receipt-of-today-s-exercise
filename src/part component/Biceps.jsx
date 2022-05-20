import styled from "styled-components";

const StyledBiceps = styled.div`
  font-family: "Koulen", cursive;
  color: ${(props) => props.theme.bicepsColor};
  font-size: 40px;
`;

const Biceps = () => {
  return <StyledBiceps> Biceps </StyledBiceps>;
};

export default Biceps;
