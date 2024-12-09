"use client";

import { useEffect, useState } from "react";
import { fetchNews } from "@/lib/newsServices";
import { InewsItem } from "@/interfaces";

import Chart from "./ui/dashboard/Chart/chart";

export default function Home() {
  const [news, setNews] = useState<InewsItem[]>([]);

  useEffect(() => {
    async function getNews() {
      const newsData = await fetchNews();
      setNews(newsData);
    }

    getNews();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      {news ? (
        <div>
          {/* {news.map((newsItem: InewsItem, index: number) => (
            <NewsCard
            key={index}
            name={newsItem.name}
            title={newsItem.title}
            description={newsItem.description}
            url={newsItem.url}
            urlToImage={newsItem.urlToImage}
            publishedAt={new Date(newsItem.publishedAt).toLocaleString()}
            />
          ))} */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Chart />
    </div>
  );
}
