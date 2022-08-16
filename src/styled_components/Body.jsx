import styled from "styled-components";

const Body = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${({ light, theme: { colors } }) =>
    light ? colors.white : colors.mediumBrown};
`;

export default Body;
