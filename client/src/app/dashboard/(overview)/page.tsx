"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HomeChart1 from "@/app/ui/dashboard/Charts/HomeChart1/HomeChart1";
import HomeChart2 from "@/app/ui/dashboard/Charts/HomeChart2/HomeChart2";
import NewsCard from "@/app/ui/dashboard/NewsCard/newsCard";
import { fetchNews } from "@/lib/newsServices";
import { InewsItem } from "@/interfaces";

const Page = () => {
  const [news, setNews] = useState<InewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const itemsPerPage = 3; // Number of news items to display per page

  useEffect(() => {
    async function getNews() {
      const newsData = await fetchNews();
      setNews(newsData);
    }

    getNews();
  }, []);

  // Calculate the index range of items to display
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedNews = news.slice(startIndex, endIndex);

  // Handle page change
  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(news.length / itemsPerPage) - 1)
    );
  };

  return (
    <main className="mx-12 my-4">
      <div>
        <header>
          <h1 className="text-3xl font-semibold">Trending Markets</h1>
          <h2 className="text-xl">December 8th</h2>
        </header>
        <div>
          <div className="grid grid-cols-3 mt-5 pb-4 border-b border-gray-700">
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
        {news.length > 0 ? (
          <div>
            <div className="flex flex-row items-center">
              {/* Left Arrow */}
              <div
                onClick={handlePrevious}
                className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ease-in-out ${
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#444]"
                }`}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-3 mx-4">
                {displayedNews.map((newsItem: InewsItem, index: number) => (
                  <NewsCard
                    key={index}
                    name={newsItem.name}
                    title={newsItem.title}
                    description={newsItem.description}
                    url={newsItem.url}
                    urlToImage={newsItem.urlToImage}
                    publishedAt={new Date(
                      newsItem.publishedAt
                    ).toLocaleString()}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <div
                onClick={handleNext}
                className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ease-in-out ${
                  endIndex >= news.length
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#444]"
                }`}
              >
                <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Page;
