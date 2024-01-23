import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosTrendingUp } from "react-icons/io";
import Loader from '../components/Loader';

const Home = () => {
  const [trending, settrending] = useState([]);
  const [nft, setnft] = useState([]);
  const [loading, setloading] = useState(false);
 
  useEffect(() => {
    async function fetchTrending(){
      setloading(true);
        try {
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/search/trending`)
        // console.log(data);
        settrending(data.coins)
        setnft(data.nfts)
        setloading(false);
        } catch (error) {
          setloading(false);
          console.log("error" , error.message);
        }
    }
    fetchTrending();
  },[])

  return (
    <>
    {
      loading ? <Loader/> : (
        <div className='p-2 border-t border-cBlue text-sm '>
      <div className='h-auto max-w-[1240px] mx-auto p-2 overflow-auto'>
        <div className='py-1 flex flex-col m-1 '>
        <div className='flex p-1'>
            <p className='md:text-2xl font-bold'>Trending Coins </p>
            <span className='ml-1 '><IoIosTrendingUp size={25} className='text-cGreen'/></span>
         </div>
              <div className='grid md:grid-cols-5 p-2 grid-cols-3  rounded-md gap-1  '>
                {
                  trending.map((i,index)=>(
                    <div key={index} className='flex p-1 items-center border rounded-md shadow-md'>
                      <img src={i.item.small} className='rounded-xl' />
                      <div className='flex flex-col mx-1 p-1 '>
                      <p className=''>{i.item.name} ({i.item.symbol})</p>
                      <p className=''>{i.item.data.price}</p>
                      <img src={i.item.data.sparkline} className='w-22 m-1 p-1 '/>
                      </div>
                      <span className='mt-[-100px] mr-[0px]'>#{i.item.market_cap_rank}</span>
                    </div> 
                  ))
                }
            </div> 
             <Heading/>
            <div className='grid md:grid-cols-7 p-2 grid-cols-3  rounded-md gap-1  '>
                {
                  nft.map((i,index)=>(
                    <div key={index} className='flex p-1 items-center border rounded-md text-sm shadow-md'>
                      <img src={i.thumb} className='rounded-xl' /> 
                       <div className='flex flex-col mx-1 p-1 '>
                       <p className=''>{i.name}</p>
                      <p className=''>{i.data.floor_price}</p>
                      <img src={i.data.sparkline} className='w-22 m-1 p-1 '/>
                      </div>
                    </div> 
                  ))
                }
            </div> 
        </div>
        </div>

       

        </div>
      )
    }
    </>
  )
}

export default Home





const Heading = () => {
  return (
    <div className='flex p-1'>
            <p className='md:text-2xl font-bold'>Trending NFTs </p>
            <span className='ml-1 '><IoIosTrendingUp size={25} className='text-cGreen'/></span>
    </div>
  )
}

