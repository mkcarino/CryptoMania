import Header from "../components/Header";
import axios from "axios";
import MarketTable from "../components/MarketTable";

function Market({ result }) {
  if(!result){
    return (
      <div className="h-screen bg-gray-200">
        <div className="w-full">
          <Header title="Top 100 by MarketCap" />
         <div className="flex justify-center pt-5 text-2xl">There was an error fecthing data</div>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-gray-200">
      <div className="w-full">
        <Header title="Top 100 by MarketCap" />
        <MarketTable result={result} />
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
    );
    const result = res.data;
    return { props: { result } };
  } catch (error) {
    console.log(error);
    const result = false;
    return { props: {result} };
  }

  
}
export default Market;
