import styled from "styled-components";

const StyledBack = styled.div`
  font-family: "Koulen", cursive;
  color: ${(props) => props.theme.backColor};
  font-size: 40px;
`;

const Back = () => {
  return <StyledBack> Back </StyledBack>;
};

export default Back;
