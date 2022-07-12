import React from 'react';
import {useNavigate} from 'react-router-dom'
const CoinMain = ({coin}) => {
    const navigate = useNavigate()
    return (
        
                <div onClick={() => navigate(`/coin/${coin.id}`)} className='  items-center hover:scale-105  cursor-pointer transition-all duration-150 delay-75 even:bg-[#a1a1a1]  dark:even:bg-blue-900 flex  justify-between w-[90%] sm:w-[80%] font-bold lg:w-[60%] text-[#363434]  dark:bg-purple dark:text-white mx-auto bg-[#d6d6d6] p-2 px-4 rounded'>
            <p className='flex items-center '>{coin.market_cap_rank}</p>
            <div className='flex items-center space-x-1'>
                <img className='w-10' src={coin.image} alt={coin.name} />
                <p className=''>{coin.symbol.toUpperCase()}</p>
            </div>
            <p className='flex items-center '>{coin.current_price.toLocaleString()}</p>
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hidden md:block'>${coin.total_volume.toLocaleString()}</p>
            <p className='hidden md:block'>${coin.market_cap.toLocaleString()}</p>
        </div>
        
    );
};

export default CoinMain;