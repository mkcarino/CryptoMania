import Header from "../components/Header";
import axios from "axios";

import MarketTable from "../components/MarketTable";
import TableTest from "../components/tabletest";
function Market({ result }) {
  const price = new Intl.NumberFormat().format();
  return (
    <div className="bg-gray-200 ">
      <div className="w-full">
      <Header title='Top 100 by MarketCap'/>
      <MarketTable  result={result}/>
      
      </div>
      
      </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
  );
  const result = res.data;
  console.log(result.id);
  // Pass data to the page via props
  return { props: { result } };
}
export default Market;
