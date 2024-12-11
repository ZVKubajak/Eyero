"use client";

import "./homechart2.css";
import { fetchHomepageCryptoData } from "@/lib/homeData";
import { formatPrice } from "@/lib/utils";
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
  // ChartTooltip,
  // ChartTooltipContent,
} from "@/components/ui/chart";
import { useState, useEffect } from "react";

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const HomeChart2 = ({ id }: { id: string }) => {
  const [chartData, setChartData] = useState<
    { timestamp: number; price: number }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHomepageCryptoData(id);

      if (data) {
        const mappedData = data.prices.map((dataPoint: [number, number]) => ({
          timestamp: dataPoint[0],
          price: dataPoint[1],
        }));
        setChartData(mappedData);
      }
    };

    fetchData();
  }, []);

  let formattedPrice = "Loading...";
  if (chartData.length > 0) {
    const unformattedPrice = chartData[chartData.length - 1].price;

    formattedPrice = formatPrice(unformattedPrice);
    console.log(formattedPrice);
  }

  let symbol;
  if (id === "bitcoin") {
    symbol = "BTC";
  } else if (id === "ethereum") {
    symbol = "ETH";
  } else if (id === "ripple") {
    symbol = "XRP";
  } else if (id === "dogecoin") {
    symbol = "DOGE";
  }

  return (
    <Card className="w-3/5 border-slate-800 rounded-lg" id="chart2-card">
      <CardHeader className="py-2 pl-2">
        <div style={{ display: "flex" }}>
          <CardTitle id="chart2-card-title">{symbol}</CardTitle>
          <CardDescription id="chart2-card-price">
            {`$${formattedPrice}`}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="h-20 px-4 overflow-hidden">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} stroke="#333" />
            <XAxis dataKey="date" tickLine={false} axisLine={true} />
            <YAxis hide domain={["auto", "auto"]} />
            {/* <ChartTooltip cursor={true} content={<ChartTooltipContent />} /> */}
            <defs>
              <linearGradient id="fillChart" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="lightgreen" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="price"
              type="linear"
              fill="url(#fillChart)"
              fillOpacity={0.4}
              stroke="lightgreen"
              strokeWidth={1.5}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default HomeChart2;
