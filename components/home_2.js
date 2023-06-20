'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import Image from 'next/image'

export default function Home_2() {
  const triangulo1 = useRef(null);
  const triangulo2 = useRef(null);
  const triangulo3 = useRef(null);
  const triangulo4 = useRef(null);
  const triangulo5 = useRef(null);
  const triangulo6 = useRef(null);

  useEffect(() =>{

    let ctx = gsap.context(()=>{
      gsap.from(triangulo1.current,{
        opacity: 0,
        duration: 5,
        yoyo: true,
        delay: 3
      });
      gsap.from(triangulo2.current,{
        opacity: 0,
        duration: 5,
        yoyo: true,
        delay: 3
      });
      gsap.from(triangulo3.current,{
        opacity: 0,
        duration: 5,
        yoyo: true,
        delay: 3
      });
      gsap.from(triangulo4.current,{
        opacity: 0,
        duration: 5,
        yoyo: true,
        delay: 3
      });
      gsap.from(triangulo5.current,{
        opacity: 0,
        duration: 5,
        yoyo: true,
        delay: 3
      });
      gsap.from(triangulo6.current,{
        opacity: 0,
        duration: 5,
        yoyo: true,
        delay: 3
      });
   });

    return () => ctx.revert();
  }, []);

  return (
  <>
    <div className='w-full h-auto py-10 px-20'>
      <Image className="w-40 relative -top-12 left-3/4 lg:w-48 lg:left-0 " src="/images/esfera verde.png" width={150} height={150}/>
    </div>
    <div className=' w-full h-auto relative -top-36 left-10 z-20 lg:left-1/4'>
        <Image className='relative lg:w-1/2 lg:-top-1/4 ' src="/images/img_triangulo.png" width={400} height={200} />
    </div>
    <div className='w-full h-auto px-24 relative -top-24 lg:w-2/3 lg:-top-1/4 lg:left-60'>
      <p className=" lg:text-3xl lg:text-center lg:font-medium">
          Aplicamos altos <strong> estándares 
          de calidad </strong> locales e internacionales.
          Garantizamos un servicio
          de Clase Mundial.
      </p>
    </div>
    <div className=' w-full h-auto relative top-8 lg:-top-1/4 lg:w-3/4 lg:left-60 xl:left-80'>
      <Image className=' w-2/3 h-auto relative left-14 lg:w-1/2  lg:mt-20' src="/images/logo1.png" width={150} height={150} alt="logo Wellgix" />
    </div>
  </>
  )
}
