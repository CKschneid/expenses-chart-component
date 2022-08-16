import styled from "styled-components";

const Divider = styled.hr`
  border: 1px solid
    ${({
      theme: {
        colors: { creamBg },
      },
    }) => creamBg};
  border-radius: 1px;
  margin: 32px 0px;
`;
export default Divider;
