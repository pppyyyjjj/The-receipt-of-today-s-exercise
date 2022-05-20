import styled from "styled-components";

const StyledChest = styled.div`
  font-family: "Koulen", cursive;
  color: ${(props) => props.theme.chestColor};
  font-size: 40px;
`;

const Chest = () => {
  return <StyledChest>Chest</StyledChest>;
};

export default Chest;
