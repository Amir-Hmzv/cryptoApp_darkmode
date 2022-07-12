import axios from 'axios'
 const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
const URL2  = `https://api.coingecko.com/api/v3/coins/`

        const getCoin =  async () => {
            const response = axios.get(URL)
            const data = await (await response).data
            return data
        }


        export  {getCoin}


        const getCoinId =  async (id) => {
            const response = axios.get(`${URL2}${id}`)
            const data = await (await response).data
            return data
        }


        export  {getCoinId}



