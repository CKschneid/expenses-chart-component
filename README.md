Expenses Chart Component

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- Use the JSON data file provided to dynamically size the bars on the chart

### Screenshots

![](public/desktop-preview.jpg)
![](public/active-states.jpg)

<h5 align="center">mobile</h5>
<p align="center">
<img src="public/mobile-design.jpg"/>
</p>

### Links

- Live Site URL on [CodeSandbox.io](https://codesandbox.io/s/expenses-chart-component-vvwoot)

## My process

### Built with

- [Victory](https://formidable.com/open-source/victory/) - for custom charting components
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I got some good exposure to the advanced potential for charting and data vizualization within React using Victory. For this particular case, I think Victory was overkill (my impression was that Victory is just as capable as [d3](https://d3js.org/) in handling complex use cases). Perhaps a library like [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) (react wrapper for the popular [charts.js](https://www.chartjs.org/)) would have been more appropriate and efficient to work with. Here is my code that I used to build the bar chart for this project:

```js
const Chart = ({data}) => (
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
      </VictoryBar>
    </VictoryChart>
);

```

### Continued development

I would like to come back to data visualization again in the future. Working with d3 natively within the context of a react app might be a good exercise to get comfortable in working with refs. It's always inspiring to look at project galleries within the docs for some of these charting libraries - developers do some amazing work with data visualization.
