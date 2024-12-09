"use client";

import "./homechart2.css";
import { Bar, BarChart, CartesianGrid, LabelList } from "recharts";
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
  { date: "12/01", price: 524 },
  { date: "12/02", price: 879 },
  { date: "12/03", price: 400 },
  { date: "12/04", price: 650 },
  { date: "12/05", price: 799 },
  { date: "12/06", price: 555 },
  { date: "12/07", price: 568 },
];

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const HomeChart2 = () => {
  return (
    <Card className="w-3/5 border-slate-800 rounded-lg" id="chart2-card">
      <CardHeader className="py-2 pl-2">
        <div style={{ display: "flex" }}>
          <CardTitle id="chart2-card-title">GOOG</CardTitle>
          <CardDescription id="chart2-card-price">$371.68</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="h-24 px-4 overflow-hidden">
        <ChartContainer config={chartConfig}>
          <BarChart
            width={300}
            height={120}
            data={chartData}
            margin={{
              top: 0,
              left: 5,
              right: 5,
              bottom: 10,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} stroke="#333" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Bar
              dataKey="price"
              fill="lightgreen"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default HomeChart2;
