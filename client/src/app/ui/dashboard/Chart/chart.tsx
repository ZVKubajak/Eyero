"use client";

import "./chart.css";
import { Line, LineChart, CartesianGrid } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Chart Test Data
const chartData = [
  { date: "12/01", price: 230 },
  { date: "12/02", price: 238 },
  { date: "12/03", price: 222 },
  { date: "12/04", price: 267 },
  { date: "12/05", price: 275 },
  { date: "12/06", price: 281 },
  { date: "12/07", price: 277 },
];

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const Chart = () => {
  return (
    <Card className="w-3/5 border-slate-800" id="chart-card">
      <CardHeader>
        <div style={{ display: "flex" }}>
          <CardTitle id="chart-card-title">AAPL</CardTitle>
          <CardDescription id="chart-card-category">Stocks</CardDescription>
        </div>
        <CardDescription id="chart-card-price">$254.09</CardDescription>
      </CardHeader>
      <CardContent className="h-24 overflow-hidden">
        <ChartContainer config={chartConfig}>
          <LineChart
            width={300}
            height={120}
            data={chartData}
            margin={{
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} stroke="#333" />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Line
              dataKey="price"
              type="linear"
              stroke="lightgreen"
              strokeWidth={3}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
