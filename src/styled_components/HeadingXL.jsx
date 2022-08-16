import styled from "styled-components";

const HeadingXL = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  color: ${({ theme }) => theme.colors.darkBrown};
`;

export default HeadingXL;
