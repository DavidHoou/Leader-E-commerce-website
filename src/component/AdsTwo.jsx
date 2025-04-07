import React from 'react'
import imgOne from "../../public/banner-1.jpg"
import imgTwo from "../../public/banner-8.jpg"
import imgThree from "../../public/banner-7.jpg"
export default function AdsTwo() {
  return (
      <div className='adsTwo'>
          <div className=" container  grid mt-5 mb-12   w-[92%] costum-md:w-[90%] costum-2xl:w-[85%] gap-7  grid-cols-[1fr] costum-md:grid-cols-2 min-[1200px]:grid-cols-[1fr,1fr,1fr] ">
          <div className='banner cursor-pointer relative  '>
        <div class="glass_hover"></div>
        <img className='w-full'  src={imgOne} alt="" />  
        </div>
        <div className='banner cursor-pointer relative '>
        <div class="glass_hover"></div>
        <img className='w-full'  src={imgTwo} alt="" />  
               </div>
        <div className='banner cursor-pointer hidden relative costum-2xl:block'>
          <div class="glass_hover"></div>
                <img className='w-full' src={imgThree} alt="" />  
               </div>

               
              
              
          </div>
            
      </div>
  )
}
