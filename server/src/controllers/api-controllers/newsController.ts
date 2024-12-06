import { Request, Response } from "express";
import { getNewsData } from "../../services/news/newsService";

export const fetchNewsData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { query } = req.params;

  try {
    const newsData = await getNewsData(query);
    res.json(newsData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news data." });
  }
};
