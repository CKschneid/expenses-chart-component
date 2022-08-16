import styled from "styled-components";

const SpendingCard = styled.div`
  border-radius: ${({ theme }) => theme.cardRadius};
  padding: 40px;
  background-color: ${({
    theme: {
      colors: { cardWhite },
    },
  }) => cardWhite};
  margin-top: 24px;
`;
export default SpendingCard;
