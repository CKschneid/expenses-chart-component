import styled from "styled-components";

const HeadingLarge = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: ${({ light, theme }) =>
    light ? theme.colors.cardWhite : theme.colors.darkBrown};
`;

export default HeadingLarge;
