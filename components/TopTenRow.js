function TopTenRow({ coin }) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(coin.current_price);

  const mrkcap = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(coin.market_cap);
  const percent1h = Number(
    coin.price_change_percentage_1h_in_currency / 100
  ).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
  const percent24h = Number(
    coin.price_change_percentage_24h_in_currency / 100
  ).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
  const percent7d = Number(
    coin.price_change_percentage_7d_in_currency / 100
  ).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });

  return (
    <tr className="hover:bg-blue-50">
      <td className="py-2 whitespace-nowrap ">
        <div className="flex items-center justify-center">
          <p className="md:text-xl">{coin.market_cap_rank}</p>
        </div>
      </td>
      <td className="px-3 py-2 whitespace-nowrap">
        <div className="flex items-center justify-start">
          <img
            className="w-5 h-5 rounded-full md:w-10 md:h-10 "
            src={coin.image}
            alt=""
          />
          <p className="pl-2 font-semibold text-gray-500 whitespace-nowrap">
            {coin.name}
          </p>
          <p className="pl-2 text-gray-400 uppercase md:font-bold">
            {coin.symbol}
          </p>
        </div>
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        <div className="flex items-center justify-end">
          <p className="font-semibold">{price}</p>
        </div>
      </td>

      <td className="hidden px-6 py-2 md:table-cell whitespace-nowrap">
        <div className="flex items-center justify-end">
          {percent1h > "0" ? (
            <p className="font-semibold text-green-500">{percent24h}</p>
          ) : (
            <p className="font-semibold text-red-500 ">{percent24h}</p>
          )}
        </div>
      </td>
    </tr>
  );
}

export default TopTenRow;
