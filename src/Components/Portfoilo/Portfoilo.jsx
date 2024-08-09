import React, { useState } from 'react'
import port1 from '../../assets/images/poert1.png'
import port2 from '../../assets/images/port2.png'
import port3 from '../../assets/images/port3.png'

export default function Portfoilo() {
  
  const [isLayerVisible, setIsLayerVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  
  const closeLayer = () => {
    setIsLayerVisible(false);
  };
  const stop = (event) => {
    event.stopPropagation();
  }    

  return (
    <div className='w-[85%] m-auto text-center flex flex-col items-center py-8'>
      <h2 className='font-bold text-4xl uppercase mb-5 text-[#2c3e50]'>Portfolio Component</h2>
      <div className='flex space-x-4 items-center mb-4'>
        <div className='w-20 h-1 bg-[#2c3e50]'></div>
        <i className='fa-solid fa-star text-[#2c3e50]'></i>
        <div className='w-20 h-1 bg-[#2c3e50]'></div>
      </div>
      <div className='md:flex md:flex-wrap'>
      {[port1, port2, port3, port1, port2, port3].map((port, index) => (
      <div key={index} className='w-full md:w-1/2 lg:w-1/3'>
        <div className='m-5 relative my-hover cursor-pointer' onClick={()=>{setIsLayerVisible(true) , setImgSrc(port)}}>
          <img src={port} alt={`portfolio-${index}`} className='rounded-lg my-items' />
          <div className='layer absolute top-0 left-0 bottom-0 right-0 bg-[#1abc9c] opacity-0 flex justify-center items-center rounded-lg'>
            <i className='fa-solid fa-plus fa-6x'></i>
          </div>
        </div>
      </div>
    ))}
  </div>
      {isLayerVisible && (
        <div
          className='layer-container fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 bg-blue-600 bg-opacity-30'
          onClick={closeLayer}>
          <img src={imgSrc} alt='Selected Portfolio' className='layer-item w-1/3' onClick={stop} />
        </div>
      )}
    </div>
  );
}