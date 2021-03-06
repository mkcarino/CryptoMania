import Header from "../components/Header";
import nookies from "nookies";
import { firebaseAdmin } from "../firebaseAdmin";
import AddCoin from "../components/AddCoin";
import PortofolioTable from "../components/PortofolioTable";
import { usePort } from "../contexts/PortContext";

function portfolio() {
  const { currentValue, totalInvesment } = usePort();
  const investment = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalInvesment);
  const portValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(currentValue);
  const gainloss = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(currentValue - totalInvesment);
  const gainPercent = Number(
    (currentValue - totalInvesment) / totalInvesment
  ).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
  console.log(investment > portValue);
  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="">
        <Header title="Portfolio | CryptoMania" />
        <div className="">
          {/* Top */}
          <div className="pt-5">
            <div className="flex flex-col items-center justify-start pt-2 overflow-x-scroll lg:space-x-10 md:justify-center md:flex-row md:flex-nowrap scrollbar-hide">
              <div className="flex flex-col items-center justify-center w-1/3 p-5 mt-2 bg-gray-800 lg:w-1/5 rounded-xl">
               
                  <h1 className="text-lg font-extrabold text-center text-white lg:text-2xl md:text-left whitespace-nowrap ">
                    Total Investment
                  </h1>
                  <h2 className="text-lg font-semibold text-center text-white lg:text-2xl md:text-right rounded-xl">
                    {investment}
                  </h2>
             
              </div>
              <div
                className={
                  "flex flex-col items-center justify-center w-1/3 lg:w-1/5 p-5 mt-2 rounded-xl " +
                  (currentValue > totalInvesment
                    ? "bg-green-500"
                    : "bg-red-500")
                }
              >
                <h1 className="text-lg font-extrabold text-center text-white lg:text-2xl md:text-left whitespace-nowrap ">
                  Portfolio Value
                </h1>
                <h2 className="text-lg font-semibold text-center text-white lg:text-2xl md:text-right">
                  {portValue}
                </h2>
              </div>

              <div
                className={
                  "flex flex-col items-center justify-center w-1/3 lg:w-1/5 p-5 mt-2 rounded-xl " +
                  (currentValue > totalInvesment
                    ? "bg-green-500"
                    : "bg-red-500")
                }
              >
                <h1 className="text-lg font-extrabold text-center text-white lg:text-2xl md:text-left">
                  Profit/Loss
                </h1>
                <div className="flex flex-row items-baseline">
                  <h2 className="text-lg font-semibold text-center text-white lg:text-2xl md:text-right">
                    {gainloss}
                  </h2>
                  <h2 className="text-lg font-semibold text-center text-white lg:text md:text-right">
                    {`(${gainPercent})`}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <PortofolioTable />
        </div>
        <div className="flex items-center justify-center w-full py-2">
          <h1 className="text-lg font-semibold text-gray-900 lg:text-2xl">
            <AddCoin />
          </h1>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;
    return {
      props: {
        session: `Your email is ${email} and your UID is ${uid}.`,
      },
    };
  } catch (erro) {
    context.res.writeHead(302, { location: "/login" });
    context.res.end();
    return {
      props: [],
    };
  }
}
export default portfolio;
