import axios from "axios";
import { coingeckoBaseURL } from "../../config/config";

export const getCryptoData = async (id: string) => {
  try {
    const response = await axios.get(`${coingeckoBaseURL}/coins/`, {
      params: {
        id: id,
      },
    });

    console.log(response.data.symbol);
    return response.data.symbol;
  } catch (error) {
    console.error(`Error fetching data for ${id}:`, error);
    throw error;
  }
};
