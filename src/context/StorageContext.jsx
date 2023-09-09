import { createContext, useLayoutEffect, useState } from "react";

//create context object
export const StorageContext = createContext({});

//create the provide object
export const StorageProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);

  const saveCoin = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins"));

    if (oldCoins.includes(coinId)) {
      return null;
    } else {
      let newCoin = [...oldCoins, coinId];
      setAllCoins(newCoin);
      localStorage.setItem("coins", JSON.stringify(newCoin));
    }
  };

  const removeCoin = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins"));

    let newCoins = oldCoins.filter((coin) => coin !== coinId);

    setAllCoins(newCoins);
    localStorage.setItem("coins", JSON.stringify(newCoins));
  };

  useLayoutEffect(() => {
    let isThere = JSON.parse(localStorage.getItem("coin")) || false;

    if (!isThere) {
      //set the local storage with an empty array
      localStorage.setItem("coins", JSON.stringify([]));
    } else {
      //set the state with the curremt values from local storage
      let totalCoin = JSON.parse(localStorage.getItem("coin"));
      setAllCoins(totalCoin);
    }
  }, []);

  return (
    <StorageContext.Provider
      value={{
        saveCoin,
        allCoins,
        removeCoin,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
