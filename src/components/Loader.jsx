import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loader = () => {
  return (
   <div className='h-[86vh] flex justify-center items-center'>
   <AiOutlineLoading3Quarters size={60} className='animate-spin' />
   </div>
  )
}

export default Loader