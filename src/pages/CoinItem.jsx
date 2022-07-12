import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCoinId } from "../api/getApi";
import DOMPurify from 'dompurify'

const CoinItem = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCoinId(params.id);
      console.log(response);
      setCoin(response);
    };
    fetchData();
  }, []);

  return (
      <>
      {
        coin ?
        <div className="w-full my-16  ">
        <div className="mt-24  mx-auto  w-[90%] sm:w-[80%] font-bold lg:w-[60%] ">
          <div className="text-center w-full rounded py-5 text-4xl text-[#fff]  dark:text-white dark:bg-blue-900  bg-[#a1a1a1]">
            {coin?.name}
          </div>
          <div className="text-[#fff]  dark:text-white dark:bg-blue-900  bg-[#a1a1a1] mt-6 px-4 rounded">
            <div className="py-2">
              <p className="ml-1">#Rank{coin.coingecko_rank}</p>
              <div className="between_price flex item-center   justify-between">
                <div className="flex items-center   space-x-1 mt-2 pr-4">
                  <img src={coin?.image?.small} alt="" />
                  <p>{coin?.name}</p>
                  <p className=" uppercase">({coin?.symbol}/usd)</p>
                </div>
                <div className=" lg:text-4xl md:text-3xl text-xl sm:text-2xl  self-end mb-3  price">
                  {coin.market_data?.current_price ? (
                    <h1>
                      ${coin.market_data.current_price.usd.toLocaleString()}
                    </h1>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="dark:bg-blue-900 bg-[#4d4c4c] mt-6 py-10 rounded">
            <table className="w-[80%] mx-auto dark:bg-purple  bg-[#d6d6d6]  ">
              <thead className="">
                <tr className="">
                  <th className=" th">1h</th>
                  <th className=" th">24h</th>
                  <th className=" th">7d</th>
                  <th className=" th border-r-0 sm:border-r">14d</th>
                  <th className=" th hidden  sm:table-cell ">30d</th>
                  <th className="dark:text-white  hidden  sm:table-cell  ">1yr</th>
                </tr>
              </thead>
              <tbody>
              <tr className="">
                  <th className=" th1  border-t">{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</th>
                  <th className=" th1 border-t">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</th>
                  <th className=" th1 border-t">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</th>
                  <th className=" th1 border-t  border-r-0 sm:border-r">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</th>
                  <th className=" th1 border-t hidden sm:table-cell">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</th>
                  <th className=" hidden sm:table-cell dark:text-[#c7c7c7] border-t border-[#a1a1a1] dark:border-[#fff]  text-[#8f8f8f] ">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-[#777777] dark:bg-purple p-5 rounded space-y-2">
            <div className="w-full flex flex-col sm:flex-row justify-between">
            <div className="flex  justify-between w-full sm:w-[45%] border-b p-1 border-[#fff]  ">
                  <h2 className="text-white">24 Hour Low</h2>
                  <p>{coin.market_data?.low_24h ? <p className="text-[#cecece]">${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}</p>
              </div>
              <div className="flex justify-between  w-full sm:w-[45%] border-b p-1 border-[#fff]">
                  <h4 className="text-white">24 Hour High</h4>
                  {coin.market_data?.high_24h ? <p className="text-[#cecece]">${coin.market_data.high_24h.usd.toLocaleString()}</p> : null} 
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between ">
            <div className="flex  justify-between w-full sm:w-[45%] border-b p-1 border-[#ffff] ">
                  <h2 className="text-white">Market Cap</h2>
                  <p>{coin.market_data?.low_24h ? <p className="text-[#cecece]">${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}</p>
              </div>
              <div className="flex justify-between  w-full sm:w-[45%] border-b p-1 border-[#fff]">
                  <h4 className="text-white">Circulating Supply</h4>
                  {coin.market_data?.high_24h ? <p className="text-[#cecece]">${coin.market_data.circulating_supply}</p> : null} 
              </div>
            </div>
          </div>
          <div className="mt-10">
              <h2 className="text-xl md:text-3xl dark:text-white">About</h2>
              <p className="my-5 dark:text-white" dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                          }}>
                          
                          </p>
          </div>
        </div>
      </div>
      :
      null
      }
      </>
        
      
  );
};

export default CoinItem;
