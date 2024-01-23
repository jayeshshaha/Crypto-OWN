
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [page, setpage] = useState(1);
  const [row, setrow] = useState(11)

  useEffect(() => {
    async function fetchExchanges(){
        try {
          const {data} = await axios.get(`https://api.coingecko.com/api/v3/exchanges?per_page=${row}&page=${page}`)
          setExchanges(data);
        } catch (error) {
          console.log("error" , error.message);
        }
    }
    fetchExchanges();
  }, [page,row])
  
  function formatVolume(vol){
    const fixedVolume = Number(vol).toFixed(2);
    return fixedVolume;
  }
  return (
    
    <div className='p-2 border-t border-cBlue text-sm '>
      <div className='h-auto max-w-[1240px] mx-auto p-2 overflow-auto'>
        <div className='py-1 flex flex-col m-1 '>
            <p className='md:text-2xl font-bold'>Top Cryptocurrency Spot Exchanges</p>
            <p className='text-sm text-gray-400 mt-1'>Crypto Spot. ranks and scores exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported. 
             Read More</p>
        </div>

        <div className='m-1 flex items-center justify-end text-[#EFF2F5]]'>
        Show rows<select name="" id="" className='bg-[#EFF2F5] p-1 ml-1 rounded-md' onChange={(e) => setrow(parseInt(e.target.value))}>
                    <option value="11">11</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
        </div>

        <table className='w-full mb-2 shadow-xl rounded-md '>
          <thead className=' '>
            <tr className=' text-cBlack border-y '>
              <td className='text-center font-bold  p-2'>#Rank</td>
              <td className='text-center font-bold '>Name</td>
              <td className='text-center font-bold '>Year established</td>
              <td className='text-center font-bold '>Country</td>
              <td className='text-center font-bold '>Rating</td>
              <td className='text-center  font-bold'>Trade Volume (24h BTC)</td>
              <td className='text-center font-bold '>Link</td>
            </tr>
          </thead>

            {
              exchanges.map((i,index)=>(
                <tbody className=' border-b hover:bg-[#f3f3f3] text-slate-800 ' key={i.id}>
                 <tr className=''>
              <td className='text-center flex items-center justify-evenly p-1 '>{i.trust_score_rank} <img src={i.image} className='w-8 p-1' /> </td>
              <td className='text-center font-bold'>{i.name}</td>
              <td className='text-center '>{i.year_established === null ? "Not available" : i.year_established}</td>
              <td className='text-center'>{i.country}</td>
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

export default Exchanges




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



{/* <td className='text-center flex items-center justify-center '>{i.trust_score <= 6 ? <p className='bg-cYellow rounded-xl text-white w-5 h-5'>{i.trust_score }</p> : <p className='bg-cGreen rounded-xl text-white w-5 h-5'>{i.trust_score }</p>}</td> */}