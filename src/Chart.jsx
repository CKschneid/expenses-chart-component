import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from "victory";

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const Chart = (props) => {
  return (
    <VictoryChart
      animate={{
        duration: 1000,
        onLoad: { duration: 1000 },
      }}
      padding={{ top: 70 }}
      domainPadding={20}
    >
      <VictoryAxis
        tickValues={["mon", "tue", "wed", "thu", "fri", "sat", "sun"]}
        tickFormat={["mon", "tue", "wed", "thu", "fri", "sat", "sun"]}
        style={{ axis: { stroke: "transparent" } }}
      />
      <VictoryBar
        data={data}
        x="day"
        y="amount"
        style={{
          data: { fill: "#EC755D" },
          labels: { fill: "#FFFFFF", fontFamily: "'DM Sans', sans-serif" },
        }}
        barRatio={0.8}
        cornerRadius={{ top: 5, bottom: 5 }}
        labels={({ datum }) => `$${datum.amount}`}
        labelComponent={
          <VictoryTooltip
            flyoutStyle={{
              fill: "#382314",
            }}
            pointerLength={0}
            dy={-12}
            flyoutPadding={8}
          />
        }
      ></VictoryBar>
    </VictoryChart>
  );
};

<VictoryBar
  data={data}
  // data accessor for x values
  x="quarter"
  // data accessor for y values
  y="earnings"
/>;
export default Chart;
