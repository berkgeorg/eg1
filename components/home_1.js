import React from 'react'
import Image from 'next/image'

export default function Home_1() {
  return (
  <>
    <div className=' w-full h-auto pt-20 lg:w-1/2 '>
      <Image className=' w-3/4 h-auto relative left-14 lg:left-30 xl:w-1/2 xl:left-36' src="/images/logo1.png" width={150} height={150} alt="logo Wellgix" />    
    </div>
    <div className="w-1/2 h-screen  hidden img_home lg:flex  lg:relative lg:left-1/2 lg:bottom-40">
      <Image className="h-auto w-full xl:img_ancho " src="/images/img-petrolera_2.png" width={500} height={500}/>
    </div>
    <div className='w-full h-auto py-10 px-20 lg:w-1/2 lg:relative lg:-top-full lg:-left-8 lg:mt-10'>
      <p className='lg:text-2xl lg:text-left lg:font-medium'>Somos una empresa venezolana
          enfocada en la operación y 
          mantenimiento operacional de  
          <strong> facilidades de superficie</strong>, 
          servicios de <em>Well Testing </em>
          y <em>medición multifásica.</em>
      </p>
    </div>
    <div className=' flex flex-col w-full h-auto py-10 px-20 lg:w-1/2 lg:relative lg:-top-full lg:left-30 xl:left-32'>
      <button className=" btn shadow-lg shadow-green-700/50  bg-green-700 ">Contáctanos</button>
      <button className=" btn shadow-lg shadow-neutral-900/50 bg-neutral-900 ">Lee más</button>
    </div>
    <div className='w-full h-auto py-10 px-20 lg:absolute lg:bottom-0 lg:left-96'>
      <Image className="w-20 relative -bottom-20 lg:-left-10 lg:-bottom-32 " src="/images/esfera verde.png" width={150} height={150}/>
      <Image className="w-32 relative bottom-20 left-8 " src="/images/esfera gris.png" width={150} height={150}/> 
    </div>
  </>
  )
}
