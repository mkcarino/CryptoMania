import MarketRow from "../components/MarketRow";
function MarketTable({ result }) {
  return (
    <div className="flex flex-col px-0 pt-5 md:px-8 lg:px-32">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle md:w-full ">
          <div className="overflow-hidden border-b border-blue-500 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-blue-600 md:w-full">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 py-4 pl-2 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 rounded-tl-lg"
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
                    className="sticky top-0 hidden px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 md:table-cell "
                  >
                    <div className="flex justify-end">
                      <p> Market Cap</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 hidden px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 md:table-cell"
                  >
                    <div className="flex justify-center">
                      <p> 1h</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 "
                  >
                    <div className="flex justify-center">
                      <p> 24h</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 hidden px-6 py-4 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-600 rounded-tr-lg md:table-cell"
                  >
                    <div className="flex justify-center">
                      <p> 7d</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-300">
                {result.map((coin) => (
                  <MarketRow key={coin.id} coin={coin} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketTable;
