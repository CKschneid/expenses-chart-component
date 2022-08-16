import styled from "styled-components";
import Body from "./Body";

const BodyBold = styled(Body)`
  font-weight: 700;
  color: ${({
    theme: {
      colors: { darkBrown },
    },
  }) => darkBrown};
`;

export default BodyBold;
