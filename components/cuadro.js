'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import Image from 'next/image';

export default function () {

  const cuadro = useRef(null);

  useEffect(() =>{

    let ctx = gsap.context(()=>{
      gsap.from(cuadro.current,{
        opacity: 0,
        duration: 5,
        rotateX: 500,
        translateX: 400,
        yoyo: true,
        delay: 5
      });
   });

    return () => ctx.revert();
  }, []);

  return (
    <>
        <div ref={cuadro} className=' w-20 h-20 bg-slate-500 bottom-1 m-10 one'></div>
        
    </>
    
  
  )
}