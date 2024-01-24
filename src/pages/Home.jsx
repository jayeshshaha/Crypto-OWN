import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosTrendingUp } from "react-icons/io";
import Loader from '../components/Loader';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from 'react-hot-toast';
import Newsbox from '../components/Newsbox';


const Home = () => {
  const [trending, settrending] = useState([]);
  const [nft, setnft] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchdata, setsearchdata] = useState([])
  const [seachCoin, setseachCoin] = useState('');
  const [temp, settemp] = useState('')
  const [loading1, setloading1] = useState(false)


  useEffect(() => {
    async function fetchTrending(){
      setloading1(true);
        try {
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/search/trending`)
        settrending(data.coins)
        setnft(data.nfts)
        setloading1(false);
        } catch (error) {
          setloading(false);
          console.log("error" , error.message);
        }
    }
    fetchTrending()
   
  },[])


  useEffect(() => {
    async function searchCoin(){
      setloading1(true);
        try {
        const {data : searched } = await axios.get(`https://api.coingecko.com/api/v3/search?query=${temp}`)
        setsearchdata(searched.coins)
        setloading1(false);
        } catch (error) {
          setloading1(false);
          console.log("error" , error.message);
        }
    }
    searchCoin()
   
  },[temp])


  function handleSearchCoin() {
    if(seachCoin === ""){
      return toast.error("Search cannot be empty");
    }
    settemp(seachCoin); 
    // console.log(temp);
    setseachCoin('');
  }

  return (
    <>
    {
      loading ? <Loader/> : (
        <div className='p-2 border-t border-cBlue text-sm '>
      <div className='h-auto max-w-[1240px] mx-auto p-2 overflow-auto'>

<div className='flex items-center justify-center'>
        <div className='border flex rounded-xl w-[60%]'>
        <input type="text" className='w-full px-1 '  value={seachCoin} onChange={(e)=> setseachCoin(e.target.value)} /><button className='p-1 border-l' onClick={handleSearchCoin} >Search</button> 
        </div>
        <div>
        {
          searchdata.length > 0 ? <button onClick={()=>setsearchdata([])} className='m-2 px-3 py-1 border rounded-xl'>Clear</button> : ''
        }
        </div>
      </div>

   {/* search part */}
   {
     loading1 ? <Loader1/>: (
      <div className='grid md:grid-cols-5 p-2 grid-cols-3  rounded-md gap-1   '>
                {
                  searchdata.slice(0,25).map((i,index)=>(
                    <div key={index} className='flex items-center border shadow-md rounded-md'>
                      <div className='flex items-center '>
                        <div className='p-1'>
                          <img src={i.large} className='h-10' />
                        </div>
                      <div className='ml-2'>
                      <p className=''>#{i.market_cap_rank  === null ? "Not available" : i.market_cap_rank}</p>
                      <p className=''>{i.name } ({i.symbol})</p>
                      </div>
                    </div> 
                    </div> 
                  ))
                }
            </div> 
     )

   }


        <div className='py-1 flex flex-col m-1  '>
        <div className='flex p-1 md:p-2 bg-black text-white rounded-md'>
            <p className='md:text-2xl font-bold'>Trending Coins </p>
            <span className='ml-1 '><IoIosTrendingUp size={25} className='text-cGreen'/></span>
         </div>
              <div className='grid md:grid-cols-5 p-2 grid-cols-3  rounded-md gap-1  '>
                {
                  trending.map((i,index)=>(
                    <div key={index} className='flex p-1 items-center border rounded-md shadow-md '>
                      <img src={i.item.small} className='rounded-xl' />
                      <div className='flex flex-col mx-1 p-1 line-clamp-2 '>
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
        <Newsbox/>
        </div>
      )
    }
    </>
  )
}

export default Home





const Heading = () => {
  return (
    <div className='flex p-1 md:p-2 bg-black text-white rounded-md'>
            <p className='md:text-2xl font-bold'>Trending NFTs</p>
            <span className='ml-1 '><IoIosTrendingUp size={25} className='text-cGreen'/></span>
    </div>
  )
}



const Loader1 = () => {
  return (
   <div className='h-[20vh] flex justify-center items-center'>
   <AiOutlineLoading3Quarters size={40} className='animate-spin' />
   </div>
  )
}



