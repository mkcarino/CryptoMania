import React, { useState, useEffect, useContext, createContext } from "react";

const PortContext = createContext({});

export const PortProvider = ({ children }) => {
  const [coinListContext, setCoinListCointext] = useState([]);
  const [testArray, setTest] = useState([]);
  const [portfolioItem, setportfolioItem] = useState([]);
  const [gekoData, setGekoData] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);
  const [totalInvesment, setTotalInvesment] = useState(0);
  const value = {
    coinListSet,
    portfolioItem,
    gekoDataCall,
    currentValue,
    totalInvesment,
  };
  function coinListSet(coinList) {
    setCoinListCointext(coinList);
  }
  function gekoDataCall(geko) {
    setGekoData(geko);
  }

  useEffect(() => {
    coinListContext.sort((a, b) => a.nameCoin.localeCompare(b.nameCoin));

    const cointTotalTransaction = Array.from(
      coinListContext.reduce(
        (m, { nameCoin }) => m.set(nameCoin, (m.get(nameCoin) || 0) + +1),
        new Map()
      ),
      ([nameCoin, coinNumTrans]) => ({ nameCoin, coinNumTrans })
    );

    /* Total amount of holdings per coin */
    const coinTotalAmount = Array.from(
      coinListContext.reduce(
        (m, { nameCoin, quantityCoin }) =>
          m.set(nameCoin, (m.get(nameCoin) || 0) + quantityCoin),
        new Map()
      ),
      ([nameCoin, coinAmount]) => ({ nameCoin, coinAmount })
    );
    /* Total amount of holdings per coin */
    const coinTotalValue = Array.from(
      coinListContext.reduce(
        (m, { nameCoin, totalValue }) =>
          m.set(nameCoin, (m.get(nameCoin) || 0) + totalValue),
        new Map()
      ),
      ([nameCoin, coinValue]) => ({ nameCoin, coinValue })
    );
    
  
    const totalInvested = coinTotalValue.reduce((n, {coinValue}) => n + coinValue, 0); 
    setTotalInvesment(totalInvested);
    console.log("total:",totalInvested);
    /* Array with name, total numb transaction and total coin   */
    const arrayNameToTc = cointTotalTransaction.map((item, i) =>
      Object.assign(
        {},
        item,
        coinTotalAmount[i],
        coinTotalValue[i],
        gekoData[i]
      )
    );
    const coinTotalCurrentValue = Array.from(
      arrayNameToTc.reduce(
        (m, { nameCoin, current_price, coinAmount }) =>
          m.set(nameCoin, (m.get(nameCoin) || 0) + current_price * coinAmount),
        new Map()
      ),
      ([nameCoin, coinCurrentValue]) => ({ nameCoin, coinCurrentValue })
    );
    console.log("current value",coinTotalCurrentValue);
    const porfolioValue = coinTotalCurrentValue.reduce((n, {coinCurrentValue}) => n + coinCurrentValue, 0); 
    setCurrentValue(porfolioValue);
    setportfolioItem(arrayNameToTc);
    console.log("portoflioitem", portfolioItem)
    
  }, [coinListContext]);
  return <PortContext.Provider value={value}>{children}</PortContext.Provider>;
};

export const usePort = () => useContext(PortContext);
