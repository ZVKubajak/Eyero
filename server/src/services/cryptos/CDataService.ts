import axios from "axios";
import { coingeckoBaseURL } from "../../config/config";

export const getCryptoData = async (id: string) => {
  try {
    const response = await axios.get(`${coingeckoBaseURL}/coins/${id}`);

    const c = response.data;
    const imageURLs = {
      thumbSized: c.image.thumb,
      small: c.image.small,
      large: c.image.large,
    };

    const m = c.market_data;
    const allTimeHigh = {
      price: m.ath,
      percentage: m.ath_change_percentage,
      date: m.ath_date,
    };
    const allTimeLow = {
      price: m.atl,
      percentage: m.atl_change_percentage,
      date: m.atl_date,
    };
    const priceChangePercentages = {
      day: m.price_change_percentage_24h,
      week: m.price_change_percentage_7d,
      twoWeeks: m.price_change_percentage_14d,
      month: m.price_change_percentage_30d,
      twoMonths: m.price_change_percentage_60d,
      sixMonths: m.price_change_percentage_200d,
      year: m.price_change_percentage_1y,
    };

    // Future Development Idea: Be able to pass down a currency as a parameter to only return specific data for that currency. (c.market_data)

    const cryptoData = {
      // General Coin Data //
      id: c.id,
      symbol: c.symbol,
      name: c.name,
      blockTimeMinutes: c.block_time_in_minutes,
      description: c.description.en,
      homepageSite: c.links.homepage[0],
      blockchainSite: c.links.blockchain_site[0],
      images: imageURLs,
      releaseDate: c.genesis_date,
      popularityRank: c.market_cap_rank,

      // Market Data //
      currentPrice: m.current_price,
      allTimeHighData: allTimeHigh,
      allTimeLowData: allTimeLow,
      marketCap: m.market_cap,
      totalVolume: m.total_volume,
      high24H: m.high_24h,
      low24H: m.low_24h,
      priceChange24H: m.price_change_24h,
      priceChangePercentageData: priceChangePercentages,
      marketCapChange24H: m.market_cap_change_24h,
      marketCapPercentageChange: m.market_cap_change_percentage_24h,
      totalSupply: m.total_supply,
      maxSupply: m.max_supply,
      isSupplyInfinite: m.max_supply_infinite,
      lastUpdated: m.last_updated,
    };

    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${id}:`, error);
    throw error;
  }
};
