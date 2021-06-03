
import Header from "../components/Header";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import TopCrypto from "../components/TopCrypto";
function Home({ result, topTen }) {
  return (
    <div className="h-screen overflow-hidden bg-gray-200">


      {/* Header */}
      <Header />
      <div className="w-full md:px-10 ">
        <div className="flex mt-5 md:space-x-10">
          <div className="w-full h-screen overflow-y-scroll md:w-full lg:w-2/3 scrollbar-hide">
            <div className="pb-2 pl-5 text-2xl font-semibold text-blue-600 uppercase">
              Crypto Latest News
            </div>
            <div className="pb-44">
              {result.map((news) => (
                <NewsCard news={news} />
              ))}
            </div>
          </div>
          <div className="flex flex-col hidden md:w-1/3 lg:inline-flex">
            <div className="text-2xl font-semibold text-blue-600 uppercase">
              Top 10 MarketCap
            </div>
            <TopCrypto topTen={topTen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const newsApiKey = process.env.NEXT_NEWS_API_KEY
  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=(cryptocurrency AND bitcoin AND crypto)&sortBy=popularity&excludeDomains=lifehacker.com&pageSize=10&apiKey=${newsApiKey}`
  );
  const resCoinGeko = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  );
  const result = res.data.articles;
  const topTen = resCoinGeko.data;
  // Pass data to the page via props
  return { props: { result, topTen } };
}

export default Home;
