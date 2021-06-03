import TopTenRow from "../components/TopTenRow";

function TopCrypto({topTen}) {
  return (
    <div className="flex flex-col p-2 px-0">
      <div className="overflow-x-auto">
        <div className="inline-block w-full py-2 pr-4 align-middle md:w-full">
          <div className="overflow-x-scroll border-b border-blue-400 shadow sm:rounded-lg scrollbar-hide">
            <table className="w-full divide-y divide-blue-600 md:w-full">
              <thead>
                <tr>
                <th
                  scope="col"
                  className="sticky top-0 z-50 py-4 pl-2 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 rounded-tl-lg"
                >
                  <div className="flex justify-center">
                    <p>Rank</p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="sticky top-0 px-3 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600"
                >
                  Coin
                </th>
                <th
                  scope="col"
                  className="sticky top-0 px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600"
                >
                  <div className="flex items-center justify-end">
                    <p>Price</p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="sticky top-0 px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600"
                >
                  <div className="flex items-center justify-end">
                    <p>24H</p>
                  </div>
                </th>
               
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-300">
                {topTen.map((coin) => (
                  <TopTenRow key={coin.id} coin={coin} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default TopCrypto;
