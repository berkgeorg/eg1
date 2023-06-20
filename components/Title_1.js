import React from "react";
import Image from "next/image";

export default function Title_1() {
  return(
    <>
      <Image className="w-60 absolute -top-16 esfera z-40 " src="/images/esfera verde.png" width={150} height={150}/>
      <div className="w-screen h-2/3 lg:h-auto ">
        <Image className=" relative lg:hidden" src="/images/Img_Trabajador_2.png" width={500} height={500}/>
        <Image className=" relative hidden lg:flex lg:w-full lg:h-auto" src="/images/Img_Trabajador.png" width={500} height={500}/>
      </div>
      <div className=' w-1/3 h-auto relative -top-48 left-10 lg:top-0 xl:-top-full xl:left-2/4'>
        <Image className="w-48 relative top-24 left-56 z-40 lg:-rotate-90 lg:top-0 xl:top-28" src="/images/triangulo_verde.png" width={150} height={150}/>
      </div>
      <div className="w-full relative -top-16 lg:-top-28 xl:-top-full xl:left-72 xl:z-40">
        <h1 className="text-black text-3xl text-center mt-10 font-semibold">SERVICIOS</h1>
        <p></p>
      </div>
    </>
  )
}