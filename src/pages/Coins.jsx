import React from 'react';
import CoinMain from '../components/CoinMain';
import ReactPaginate from "react-paginate";
import { useState } from 'react';

const Coins = ({coins}) => {
    
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(0);
    const searchedProduct = coins.filter((item) => {
        if (search.value === "") {
          return item;
        }
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else {
          return console.log("not found");
        }
      });
     
      const productPerPage = 10;
      const visitedPage = pageNumber * productPerPage;
      const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
      );
      const pageCount = Math.ceil(searchedProduct.length / productPerPage);

      const onChangeSearch =  (e) => {
        setSearch(e.target.value)
        
        
       }


 
      const changePage = ({ selected }) => {
        setPageNumber(selected);
      };
    return (
        <>
        <div className="w-full my-16">
        <input value={search} onChange={onChangeSearch } placeholder='search coins ...' type="text" className='shadow-lg flex justify-center mx-auto p-1 outline-none rounded px-2' name="" id="" />
        </div>
            <div className='flex justify-center mt-24'>
               
                <div className='w-full space-y-4  mb-20 '>
                   
                    <div className={` ${searchedProduct.length ==0 && 'hidden'}  flex   justify-between w-[90%] sm:w-[80%] font-bold lg:w-[60%] text-[#363434]  dark:bg-purple dark:text-white mx-auto bg-[#d6d6d6] p-2 px-4 rounded`}>
                        <p>#</p>
                        <p>Coin</p>
                        <p>Price</p>
                        <p className=''>24th</p>
                        <p className='hidden md:block'>Volume</p>
                        <p className=' hidden md:block'>mkt Cap</p>
                    </div>
                    {
                        coins.length ?  
                        displayPage.map(item => (
                            <CoinMain key={item.id} coin={item}/>
                        ))
                        :
                        <p className='flex justify-center items-center px-10 py-20 text-4xl font-bold dark:text-blue-900' >Loading...</p>
                    }
         
         <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns justify-center px-2 space-x-2 sm:space-x-4 md:space-x-6 pt-10  w-full flex  "
                  pageLinkClassName='bg-yellow-300 px-3 py-1 rounded-full dark:bg-purple dark:text-white'
                  pag
                activeLinkClassName=' bg-[#000] text-white px-3 py-1 rounded-full dark:bg-blue-900'
                  nextClassName='bg-black text-white px-2 py-1 rounded dark:bg-blue-900'
                  previousClassName='bg-[#000] text-white  px-2 py-1 rounded dark:bg-blue-900 '
                
              />
            </div>
               
            </div>
            </div>
        </>
    );
};

export default Coins;