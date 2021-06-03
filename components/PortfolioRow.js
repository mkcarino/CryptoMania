function PortfolioRow({ coin }) {
  const investment = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",  
  }).format(coin.coinValue);
  const invesmentValue =  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",  
  }).format(coin.coinAmount * coin.current_price);
  const currentValue = (coin.coinAmount * coin.current_price)
  const gainloss =  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",  
  }).format(currentValue - coin.coinValue);
  const gainPercent = Number((currentValue - coin.coinValue)/coin.coinValue).toLocaleString(
    undefined,
    { style: "percent", minimumFractionDigits: 2 }
  );
  const avgBuy = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",  
  }).format(coin.coinValue / coin.coinAmount);
  return (
    <tr className="">
      <td className="px-3 py-2 whitespace-nowrap ">
        <div className="flex items-center justify-start">
          <img
            className="w-5 h-5 rounded-full md:w-7 md:h-7 "
            src={coin.image}
            alt=""
          />
          <p className="pl-2 font-semibold text-blue-600 whitespace-nowrap">
            {coin.nameCoin}
          </p>
        </div>
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        <div className="flex items-center justify-end">
          <p className="font-semibold">{coin.coinAmount}</p>
        </div>
      </td>
      <td className="px-6 py-2 md:table-cell whitespace-nowrap">
        <div className="flex items-center justify-end">
          <p className="font-semibold">{investment}</p>
        </div>
      </td>
      <td className="px-6 py-2 md:table-cell whitespace-nowrap">
        <div className="flex items-center justify-end">
        {currentValue > coin.coinValue ? (
            <p className="font-semibold text-green-500">{invesmentValue}</p>
          ) : (
            <p className="font-semibold text-red-500 ">{invesmentValue}</p> 
          
          )}
        </div>
      </td>
      <td className="px-6 py-2 md:table-cell whitespace-nowrap">
        <div className="flex items-center justify-end">
        {currentValue > coin.coinValue ? (
            <p className="font-semibold text-green-500">{`${gainloss} (${gainPercent})`}</p>
          ) : (
            <p className="font-semibold text-red-500 "> {`${gainloss} (${gainPercent})`}</p> 
          
          )}
        </div>
      </td>
      <td className="hidden px-6 py-2 md:table-cell whitespace-nowrap">
        <div className="flex items-center justify-end">
          <p className="font-semibold ">
            {avgBuy}
          </p>
        </div>
      </td>
    </tr>
  );
}

export default PortfolioRow;
