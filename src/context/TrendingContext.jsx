import { createContext, useLayoutEffect, useState } from "react";

//create context object
export const TrendingContext = createContext({});

//create the provide object
export const TrendingPrrovider = ({ children }) => {
  const [trendData, setTrendData] = useState();

  const getTrendData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      )
        .then((res) => res.json())
        .then((json) => json);
      setTrendData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetTrending= () => {
    getTrendData()
  };

  useLayoutEffect(() => {
    getTrendData();
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};
