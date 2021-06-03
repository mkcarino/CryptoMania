
import PortfolioRow from "../components/PortfolioRow";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePort } from "../contexts/PortContext";

import { db } from "../firebaseClient";
import { useAuth } from "../contexts/AuthContext";

function PortofolioTable() {
  const { user } = useAuth();
  const [coin, setCoin] = useState([]);
  const  { coinListSet, portfolioItem, gekoDataCall} = usePort();
  useEffect(() => {
    if (!user) return;
    const ref = db.collection(user.uid).doc("portfolio").collection("transactions");
    const unsubscribe = ref
      .onSnapshot(async(querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({
          iddata: doc.id, ...doc.data()
        }));
        
        const ids = items.map((o) => o.idCoin);
        const arrayListName = (Array.from(new Set(ids)));
        const query = arrayListName.toString();
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${query}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        )
        console.log("Chiamo APi", res.data);
        const imgUrl = res.data.map(({ image, name, current_price  }) => ({ image, name, current_price}));
        imgUrl.sort((a, b) => a.name.localeCompare(b.name));
        gekoDataCall(imgUrl);
        setCoin(items);
        coinListSet(items);
      });
    
    return () => unsubscribe();
  }, [user]);
  if(portfolioItem.length > 0 ){
  portfolioItem.sort((a, b) => b.coinValue- (a.coinValue));
  return (

    <div className="flex flex-row justify-center">
      <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 scrollbar-hide">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-blue-600 shadow sm:rounded-lg ">
            <table className="min-w-full divide-y divide-blue-600">
              <thead>
                <tr>
                  
                  <th
                    scope="col"
                    className="px-3 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 "
                  >
                    Coin
                  </th>
                 
                  <th
                    scope="col"
                    className="px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 "
                  >
                    <div className="flex items-center justify-end">
                      <p>Total</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 md:table-cell whitespace-nowrap"
                  >
                    <div className="flex justify-end">
                      <p> Initial Investment</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 md:table-cell whitespace-nowrap"
                  >
                    <div className="flex justify-end">
                      <p>Current Value</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 md:table-cell"
                  >
                    <div className="flex justify-end">
                      <p>Gain/Lost</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="hidden px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 md:table-cell"
                  >
                    <div className="flex justify-end">
                      <p> Avg Buy Price</p>
                    </div>
                  </th>
                
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-600">
                {portfolioItem.length > 0 ?
                (portfolioItem.map((coin) => (
                
                  <PortfolioRow coin={coin} key={coin.nameCoin}/>
                ))) : (<tr><td><div>No data</div></td></tr>) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );}
  else
  return(<div className="flex justify-center">No Transactions yet</div>)
}

export default PortofolioTable;
