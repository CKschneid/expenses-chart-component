import styled from "styled-components";

const MyBalanceCard = styled.div`
  background: ${({ theme: { colors } }) => colors.red};
  border-radius: ${({ theme }) => theme.cardRadius};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
`;

export default MyBalanceCard;
