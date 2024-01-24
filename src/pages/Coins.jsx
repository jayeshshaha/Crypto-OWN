
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import Loader from '../components/Loader';

const Coins = () => {
  const [exchanges, setExchanges] = useState([]);
  const [page, setpage] = useState(1);
  const [row, setrow] = useState(11)
  const [loading, setloading] = useState(false);


  const url = "https://api.coingecko.com/api/v3";
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en
 
  useEffect(() => {
    async function fetchExchanges(){
      setloading(true);
        try {
        // const {data} = await axios.get(`https://api.coingecko.com/api/v3/exchanges?per_page=${row}&page=${page}`)
        // const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&page=1`)
        const {data} = await axios.get(`${url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en`)
        console.log(data);
        setExchanges(data);
        setloading(false);
        // console.log("data",data);
        } catch (error) {
          setloading(true);
          console.log("error" , error.message);
        }
    }
    fetchExchanges();
  }, [page,row])
  
  function formatVolume(vol){
    const fixedVolume = Number(vol).toFixed(2);
    return fixedVolume;
  }

  function formatHour(val){
    return Number(val).toFixed(2);
  }
  return (
    <>
      {loading ? <Loader/> : (
        <div className='p-2 border-t border-cBlue text-sm'>
    <div className='h-auto max-w-[1240px] mx-auto p-2 overflow-auto'>
      <div className='py-1 flex flex-col m-1'>
          <p className='md:text-2xl font-bold'>Top Coins</p>
          <p className='text-sm text-gray-400 mt-1 flex'>The global crypto market cap is <span className='font-bold text-black ml-1 '>$1.52T</span>, a <span className='text-cRed font-bold flex items-center mr-1'><GoTriangleDown />5.24% </span> decrease over the last day.</p>
      </div>

      <div className='m-1 flex items-center justify-end text-[#EFF2F5]]'>
        {/* <div>
          USD<input type="radio" name="" id="" />
          INR<input type="radio" name="" id="" />
          <input type="radio" name="" id="" />
        </div> */}
      Show rows<select name="" id="" className='bg-[#EFF2F5] p-1 ml-1 rounded-md' onChange={(e) => setrow(parseInt(e.target.value))}>
                  <option value="11">11</option>
                  <option value="20" className='bg-red'>20</option>
                  <option value="50">50</option>
                </select>
      </div>

      <table className='w-full mb-2 shadow-xl rounded-md  '>
        <thead className=' '>
          <tr className=' text-cBlack border-y '>
            <td className='text-center font-bold  p-2'>#Rank</td>
            <td className='text-center font-bold '>Name</td>
            <td className='text-center font-bold '>Price</td>
            <td className='text-center font-bold '>24h%</td>
            <td className='text-center font-bold '>Rating</td>
            <td className='text-center  font-bold'>Trade Volume (24h BTC)</td>
            <td className='text-center font-bold '>Link</td>
          </tr>
        </thead>
        {/* [0].market_cap_change_percentage_24h */}
          {
            exchanges.map((i,index)=>(
              <tbody className=' border-b hover:bg-[#f3f3f3] text-slate-800 ' key={i.id}>
               <tr className=''>
            <td className='text-center flex items-center justify-evenly p-1 '>{i.market_cap_rank} <img src={i.image} className='w-8 p-1' /> </td>
            <td className='text-center font-bold'>{i.name}</td>
            <td className='text-center '>{i.current_price === null ? "Not available" : i.current_price}</td>
            <td className='text-center'>{formatHour(i.market_cap_change_percentage_24h) < 0 ? <p className='text-cRed flex justify-center items-center'> <span><GoTriangleDown size={15} /></span>{formatHour(i.market_cap_change_percentage_24h)}</p>: <p className='text-cGreen flex justify-center items-center'><span><GoTriangleUp size={15}/></span>{formatHour(i.market_cap_change_percentage_24h)}</p> }</td>
            <td className='text-center flex items-center justify-center '>{i.trust_score <= 6 ? <Below value={i.trust_score}/> : <Above value={i.trust_score}  />} </td>
            <td className='text-center '>{formatVolume(i.trade_volume_24h_btc)}</td>
            <td className='text-center '><a href={i.url} target='blank' ><button className='border rounded-sm p-1  text-black'>Explore</button></a></td>
            </tr>
            </tbody>
            ))
          }
      </table>
      <div className='flex items-center justify-center p-2'>
        <button className='px-4 py-1 border hover:bg-slate-300' onClick={() =>setpage(1)}>1</button>
        <button className='px-4 py-1 border hover:bg-slate-300' onClick={() =>setpage(2)}>2</button>
        <button className='px-4 py-1 border hover:bg-slate-300' onClick={() =>setpage(3)}>3</button>
        <button className='px-4 py-1 border hover:bg-slate-300' onClick={() =>setpage(4)}>4</button>
    </div>
    </div>
  </div>
      )
  }
      </>
  )
}

export default Coins

const Above = ({value}) => {
  return (
    <p className='bg-cGreen rounded-xl text-white w-5 h-5'>{value}</p>
  )
}

const Below = ({value}) => {
  return (
    <p className='bg-cYellow rounded-xl text-white w-5 h-5'>{value }</p> 
  )
}
