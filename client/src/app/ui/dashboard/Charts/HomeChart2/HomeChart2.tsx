"use client";

import "./homechart2.css";
import { fetchHomepageCryptoData } from "@/lib/homeData";
import { formatPrice } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid } from "recharts";
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
            <Bar dataKey="price" fill="lightgreen" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default HomeChart2;
