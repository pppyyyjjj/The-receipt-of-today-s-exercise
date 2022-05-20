import styled from "styled-components";

const StyledShoulder = styled.div`
  font-family: "Koulen", cursive;
  color: ${(props) => props.theme.shoulderColor};
  font-size: 40px;
`;

const Shoulder = () => {
  return <StyledShoulder> Shoulder </StyledShoulder>;
};

export default Shoulder;
