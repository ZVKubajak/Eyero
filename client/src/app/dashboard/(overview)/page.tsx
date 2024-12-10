"use client";

import { useState, useEffect } from "react";
import HomeChart1 from "@/app/ui/dashboard/Charts/HomeChart1/HomeChart1";
import HomeChart2 from "@/app/ui/dashboard/Charts/HomeChart2/HomeChart2";
import NewsCard from "@/app/ui/dashboard/NewsCard/newsCard";
import { fetchNews } from "@/lib/newsServices";
import { InewsItem } from "@/interfaces";

const Page = () => {
  const [news, setNews] = useState<InewsItem[]>([]);

  useEffect(() => {
    async function getNews() {
      const newsData = await fetchNews();
      setNews(newsData);
    }

    getNews();
  }, []);

  return (
    <main className="mx-12 my-4">
      <div>
        <header>
          <h1 className="text-3xl font-semibold">Trending Markets</h1>
          <h2 className="text-xl">December 8th</h2>
        </header>
        <div>
          <div className="grid grid-cols-3 mt-2 pb-4 border-b">
            <HomeChart1 />
            <HomeChart1 />
            <HomeChart1 />
          </div>
          <div className="grid grid-cols-4 mt-4">
            <HomeChart2 />
            <HomeChart2 />
            <HomeChart2 />
            <HomeChart2 />
          </div>
        </div>
        {news ? (
          <div className="grid grid-cols-3">
            {news.slice(0, 3).map((newsItem: InewsItem, index: number) => (
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
    </main>
  );
};

export default Page;
