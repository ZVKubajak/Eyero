import axios from "axios";
import { newsapiConfig } from "../../config/config";
import { describe } from "node:test";

export const getNewsData = async (query: string) => {
    
    try {
        
        const response = await axios.get(`${newsapiConfig.baseUrl}/everything`, {
            params: {
                q: query,
                apikey: newsapiConfig.newsapiApiKey
            }
        });

        const n = response.data.articles;

        const newsResults = n.map((article: any) => ({
            
            name: article.source.name,
            title: article.title,
            description: article.description,

        }))

        return n;
    } catch (error) {
        console.error("An error occured:", error)
        throw error;
    }
}