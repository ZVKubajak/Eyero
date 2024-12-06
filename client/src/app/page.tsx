"use client";

import { useEffect, useState } from "react";
import { fetchNews } from "@/services/newsServices";
export default function Home() {

  const [news, setNews] = useState<any[]>([]);

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
          {news.map((newsItem: any, index: number) => (
            <div key={index}>
              <h2>{newsItem.title}</h2>
              <p>{newsItem.description}</p>
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
              <p>Published at: {new Date(newsItem.publishedAt).toLocaleString()}</p>
              <img
              src={newsItem.urlToImage}
              width={500}
              height={500}
              alt="Picture of the news"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}