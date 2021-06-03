import React, { useState, useEffect } from "react";
import { db } from "../firebaseClient";
import { useAuth } from "../contexts/AuthContext";
import { usePort } from "../contexts/PortContext";

function PortfolioFirestore() {
  const { user } = useAuth();
  const [coin, setCoin] = useState([]);
  const  { coinListSet, coinNameList, portfolioItem } = usePort();
  useEffect(() => {
    if (!user) return;
    console.log("Chiamata ref")
    const ref = db.collection(user.uid).doc("portfolio").collection("transactions");
    const unsubscribe = ref
      .onSnapshot((querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({
          iddata: doc.id, ...doc.data()
        }));
        setCoin(items);
        coinListSet(items);
      });
    return () => unsubscribe();
  }, [user]);
  console.log("Render",portfolioItem);
  
  return (
    <div>
      {portfolioItem.map((item) => (
        <h1 key={item.nameCoin}>
          {item.nameCoin}
          {" totale: "}
          {item.coinAmount}
          {" transitioni : "}
          {item.coinNumTrans}
          {" valore : "}
          {item.coinValue}
          {" prezzo medio : "}
          {parseFloat(item.coinValue/item.coinAmount).toFixed(2)}
        </h1>
      ))}
    </div>
  );
}

export default PortfolioFirestore;
