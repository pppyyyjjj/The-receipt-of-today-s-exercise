import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 60px;
  text-align: center;
  background-color: #1abc9c;
  color: ${(props) => props.theme.chestColor};
  font-size: 30px;
  position: relative;
`;

const Header = () => {
  return <StyledHeader>헤더 </StyledHeader>;
};

export default Header;
