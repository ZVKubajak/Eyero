"use client";

import { useEffect, useState } from "react";
import { fetchNews } from "@/services/newsServices";
import { InewsItem } from "@/interfaces";
import NewsCard from "./ui/NewsCard/newsCard";

export default function Home() {

  const [news, setNews] = useState<InewsItem[]>([]);

  useEffect(() => {
    async function getNews() {
      const newsData = await fetchNews();
      setNews(newsData);
    }

    getNews()
  }, [])

  return (
    <div>
      {news ? (
        <div>
          {news.map((newsItem: InewsItem, index: number) => (
            <NewsCard
            key={index}
            name={newsItem.name}
            title={newsItem.title}
            description={newsItem.description}
            url={newsItem.url}
            urlToImage={newsItem.urlToImage}
            publishedAt={new Date(newsItem.publishedAt).toLocaleString()}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
}