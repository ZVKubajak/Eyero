import axios from "axios";
import { newsapiConfig } from "../../config/config";

export const getNewsData = async (query: string) => {
    
    try {
        
        const now = new Date();
        const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));
        const from = sevenDaysAgo.toISOString().split("T")[0];

        const response = await axios.get(`${newsapiConfig.baseUrl}/everything`, {
            params: {
                q: query,
                from,
                sortBy: "publishedAt",
                apikey: newsapiConfig.newsapiApiKey
            }
        });

        const n = response.data.articles;

        const newsResults = n.map((article: any) => ({
            
            name: article.source.name,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt
        }))

        return newsResults;
    } catch (error) {
        console.error("An error occured:", error)
        throw error;
    }
}