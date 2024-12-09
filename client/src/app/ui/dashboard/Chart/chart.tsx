"use client";

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

const chartData = [
  { date: "12/01", price: 250 },
  { date: "12/02", price: 245 },
  { date: "12/03", price: 253 },
  { date: "12/04", price: 257 },
  { date: "12/05", price: 255 },
  { date: "12/06", price: 250 },
  { date: "12/07", price: 261 },
];

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const Chart = () => {
  return (
      <Card className="w-1/4 border-slate-500 bg-stone-950">
        <CardHeader>
          <CardTitle className="text-white">AAPL</CardTitle>
          <CardDescription className="text-white text-xl font-bold">$254.09</CardDescription>
          <CardDescription className="text-slate-500">Stocks</CardDescription>
        </CardHeader>
        <CardContent className="h-40 overflow-hidden">
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
              <CartesianGrid vertical={false} stroke="#333" />
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Line
                dataKey="price"
                type="linear"
                stroke="lightgreen"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
  );
};

export default Chart;
