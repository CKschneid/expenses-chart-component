import { ThemeProvider } from "styled-components";
import theme from "./styled_components/theme.js";
import HeadingLarge from "./styled_components/HeadingLarge.jsx";
import HeadingXL from "./styled_components/HeadingXL.jsx";
import Body from "./styled_components/Body.jsx";
import BodyBold from "./styled_components/BodyBold.jsx";
import MyBalanceCard from "./styled_components/MyBalanceCard.jsx";
import MyBalanceLeft from "./styled_components/MyBalanceLeft.jsx";
import ContentContainer from "./styled_components/ContentContainer.jsx";
import CircleMark from "./images/circle-mark.svg";
//spending card
import SpendingCard from "./styled_components/SpendingCard.jsx";
import Divider from "./styled_components/Divider.jsx";
import TotalContainer from "./styled_components/TotalContainer.jsx";
import TotalContainerRight from "./styled_components/TotalContainerRight.jsx";
// chart
import Chart from "./Chart.jsx";
// app level css
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ContentContainer>
          <MyBalanceCard>
            <MyBalanceLeft>
              <Body light>My balance</Body>
              <HeadingLarge light>$921.48</HeadingLarge>
            </MyBalanceLeft>
            <img src={CircleMark} />
          </MyBalanceCard>

          <SpendingCard>
            <HeadingLarge>Spending - Last 7 days</HeadingLarge>
            <Chart />
            <Divider />
            <Body>Total this month</Body>
            <TotalContainer>
              <HeadingXL>$478.33</HeadingXL>
              <TotalContainerRight>
                <BodyBold>+2.4%</BodyBold>
                <Body>from last month</Body>
              </TotalContainerRight>
            </TotalContainer>
          </SpendingCard>
        </ContentContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
