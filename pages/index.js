import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
function Home() {
  
  return (
    <div className="h-full bg-gray-200 md:h-screen ">
      {/* Header */}
      <Header />
      
      
      <div className="text-gray-700 ">
            <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
              <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
                <img className="object-cover object-center rounded" alt="hero" layout="fill" loading="lazy" src="/hero.svg" />
              </div>
              <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
                <h2 className="mb-2 text-lg font-semibold tracking-widest text-black uppercase title-font">CryptoMania </h2>
                <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font"> Crypto news, market info and Portfolio</h1>
                <p className="mb-8 text-base leading-relaxed text-left text-gray-700 ">The lastest news of cryptocurrency, market information and portfolio tracker.<br></br>
                  Register now to create your portfolio and see your coins performance</p>
                <div className="flex flex-col justify-left lg:flex-row">
                <Link href="/signup">
                  <button  className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Sign Up </button>
                  </Link><p className="mt-2 text-sm text-left text-gray-600 md:ml-6 md:mt-0"> It's all free and data is provided by CoinGecko <br className="hidden lg:block" />
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        
  );
}

export default Home;
