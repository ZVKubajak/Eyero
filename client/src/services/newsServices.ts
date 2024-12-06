export async function fetchNews() {
    try {
        const response = await fetch('/routes/news/bitcoin');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const newsResult = data.map((newsData: any) => ({
            name: newsData.name,
            title: newsData.title,
            description: newsData.description,
            url: newsData.url,
            urlToImage: newsData.urlToImage,
            publishedAt: newsData.publishedAt
        }));

        return newsResult;
    } catch (error) {
        console.error("There has been a problem with your fetch operation: ", error);
        return null;
    }
}