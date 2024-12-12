"use client";

import "./stockpreview.css";
import {
  fetchHomepageStockData,
  fetchHomepageCryptoData,
} from "@/lib/homeData";
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
import StockGraph from "../../images/images.jpeg";

type StockPreviewProps = { ticker: string } | { id: string };

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart1))",
  },
} satisfies ChartConfig;

const StockPreview = (props: StockPreviewProps) => {
  const [stockChartData, setStockChartData] = useState<
    { date: string; price: number }[]
  >([]);
  const [cryptoChartData, setCryptoChartData] = useState<
    { timestamp: Number; price: number }[]
  >([]);

  if ("ticker" in props) {
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchHomepageStockData(props.ticker);

        if (data) {
          const mappedData = data
            .map((dataPoint: StockData) => ({
              date: dataPoint.date,
              price: dataPoint.close,
            }))
            .reverse()
            .slice(-30);
          setStockChartData(mappedData);
        }
      };

      fetchData();
    }, []);
  } else if ("id" in props) {
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchHomepageCryptoData(props.id);

        if (data) {
          const mappedData = data.prices.map((dataPoint: [number, number]) => ({
            timestamp: dataPoint[0],
            price: dataPoint[1],
          }));
          setCryptoChartData(mappedData);
        }
      };

      fetchData();
    }, []);
  }

  const stockName = "Dow Jones Industrial Accositoion!";
  const maxLength = 22;

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="stock-preview-container">
      <div className="stock-name">
        <h1>Dow Jones</h1>
        <h2>{truncateText(stockName, maxLength)}</h2>
      </div>
      <div className="stock-preview-graph">
        <img src={StockGraph.src} alt="example stock graph" width={60} />
      </div>
      <div className="stock-preview-prices">
        <h1>44,401.93</h1>
        <div className="change-holder">
          <h2>-240.59</h2>
        </div>
      </div>
    </div>
  );
};

export default StockPreview;
