import Head from "next/head";
import Link from "next/link";
import AuthButton from "./AuthButton";
import React, { useState } from "react";
import { TrendingUpIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
function Header({title, keywords, description}) {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  function openHandler(){
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <div>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="sticky top-0 z-50 flex items-center px-1 py-3 bg-white shadow md:px-3 lg:px-14">
      <div className="flex items-center justify-between w-full h-10 md:h-16 ">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <TrendingUpIcon className="w-16 h-16 text-blue-500 " />
            <h1 className="px-2 text-lg font-semibold">Crypto Mania</h1>
          </div>
        </Link>
        <div className="flex items-center hidden space-x-4 md:inline-flex md:space-x-4">
        <Link href="/news" className="menu-item">
            <h1 className="menu-item">News</h1>
          </Link>
          <Link href="/market" className="menu-item">
            <h1 className="menu-item">Market</h1>
          </Link>
          <Link href="/portfolio">
            <h1 className="menu-item">Portfolio</h1>
          </Link>
           <AuthButton />
        </div>
        <div className="flex items-center md:hidden ">
        {!isMenuOpen ? (<MenuIcon className="w-12 h-12 text-blue-500" onClick={openHandler} />) : (<XIcon className="w-12 h-12 text-blue-500" onClick={openHandler} />)}
         
          {isMenuOpen && (
             <div className="fixed inset-0 z-50 flex flex-col items-center justify-start w-screen h-screen text-black bg-white top-16">
               <Link href="/news" className="menu-item">
            <h1 className="menu-item">News</h1>
          </Link>
             <Link href="/market" className="menu-item">
               <h1 className="menu-item">Market</h1>
             </Link>
             <Link href="/portfolio">
               <h1 className="menu-item">Portfolio</h1>
             </Link>
              <AuthButton />
           </div>)
          }
        </div>
      </div>
    </div>
    </div>
  );
}
Header.defaultProps ={
  title: 'CryptoMania',
  description: 'Get the news and market information about cryptocurrency',
  keywords: 'crypto, bitcoin, eth, btc, elon'
}

export default Header;
