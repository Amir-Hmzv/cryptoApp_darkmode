import React from 'react';
import Layout from './components/Layout';
import {Route,Routes} from 'react-router-dom'
import Coins from './pages/Coins';
import { useEffect } from 'react';
import {getCoin} from './api/getApi';
import { useState } from 'react';
import CoinItem from './pages/CoinItem';
const App = () => {
  const [coins, setCoins] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const  getData = await getCoin()
       
        setCoins(getData)

    }
    fetchData()
  }, [])

  return (
    <>
      <Layout>
        <Routes>
        <Route path='/' element={<Coins coins={coins}/>} />
        <Route path='/coin/:id' element={<CoinItem/>} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;