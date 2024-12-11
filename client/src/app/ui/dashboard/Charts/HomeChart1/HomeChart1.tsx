"use client";

import "./homechart1.css";
import { fetchHomepageStockData } from "@/lib/homeData";
import { StockData } from "@/interfaces";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
import { useState, useEffect } from "react";

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const HomeChart1 = ({ ticker }: { ticker: string }) => {
  const [chartData, setChartData] = useState<{ date: string; price: number }[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHomepageStockData(ticker);

      if (data) {
        const mappedData = data
          .map((dataPoint: StockData) => ({
            date: dataPoint.date,
            price: dataPoint.close,
          }))
          .reverse()
          .slice(-30);
        console.log(mappedData);
        setChartData(mappedData);
      }
    };

    fetchData();
  }, []);

  const testData = [
    { date: "2024-12-01", price: 233.46 },
    { date: "2024-12-02", price: 252.07 },
    { date: "2024-12-03", price: 290.6 },
    { date: "2024-12-04", price: 260.54 },
    { date: "2024-12-05", price: 272.71 },
    { date: "2024-12-06", price: 293.63 },
    { date: "2024-12-07", price: 285.75 },
    { date: "2024-12-08", price: 292.13 },
    { date: "2024-12-09", price: 265.86 },
    { date: "2024-12-10", price: 252.04 },
    { date: "2024-12-11", price: 252.94 },
    { date: "2024-12-12", price: 271.48 },
    { date: "2024-12-13", price: 291.96 },
    { date: "2024-12-14", price: 289.05 },
    { date: "2024-12-15", price: 251.76 },
    { date: "2024-12-16", price: 263.25 },
    { date: "2024-12-17", price: 270.18 },
    { date: "2024-12-18", price: 285.7 },
    { date: "2024-12-19", price: 270.32 },
    { date: "2024-12-20", price: 255.16 },
    { date: "2024-12-21", price: 281.25 },
    { date: "2024-12-22", price: 288.86 },
    { date: "2024-12-23", price: 275.1 },
    { date: "2024-12-24", price: 270.67 },
    { date: "2024-12-25", price: 279.0 },
    { date: "2024-12-26", price: 263.3 },
    { date: "2024-12-27", price: 291.76 },
    { date: "2024-12-28", price: 261.68 },
    { date: "2024-12-29", price: 278.55 },
    { date: "2024-12-30", price: 265.85 },
  ];

  return (
    <Card className="w-4/5 border-slate-800" id="chart1-card">
      <CardHeader>
        <div style={{ display: "flex" }}>
          <CardTitle id="chart1-card-title">{ticker}</CardTitle>
          <CardDescription id="chart1-card-category">Stocks</CardDescription>
        </div>
        <CardDescription id="chart1-card-price">
          {testData.length > 0
            ? `$${testData[testData.length - 1].price}`
            : "Loading..."}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-32">
        <ChartContainer config={chartConfig} className="w-full h-32">
          <AreaChart
            accessibilityLayer
            data={testData}
            margin={{
              top: 10,
              left: 15,
              right: 15,
              bottom: 10,
            }}
          >
            <CartesianGrid vertical={false} stroke="#333" />
            <XAxis
              dataKey="date"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(date) =>
                new Date(date + "T24:00:00Z").toLocaleString("en-US", {
                  month: "numeric",
                  day: "numeric",
                })
              }
              interval={6}
            />
            <YAxis hide domain={["auto", "auto"]} />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillChart" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="lightgreen" stopOpacity={0.8} />
                <stop offset="95%" stopColor="lightgreen" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="price"
              type="linear"
              fill="url(#fillChart)"
              fillOpacity={0.4}
              stroke="lightgreen"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default HomeChart1;
