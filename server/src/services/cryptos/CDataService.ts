import axios from "axios";
import { coingeckoBaseURL } from "../../config/config";

export const getCryptoData = async (id: string) => {
  try {
    const response = await axios.get(`${coingeckoBaseURL}/coins/${id}`);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${id}:`, error);
    throw error;
  }
};
