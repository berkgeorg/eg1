import React from "react";
import Image from "next/image";

export default function Title_2() {
  return(
  <>
    <div className="w-screen h-screen">
      <Image className="w-full h-auto relative lg:hidden" src="/images/img-petrolera_2.png" width={500} height={500}/>
      <Image className="w-full h-auto relative hidden lg:flex " src="/images/img_petrolera.png" width={500} height={500}/>
      <div className=' hidden w-1/3 h-auto relative -top-48 left-10 lg:top-0 lg:flex xl:-top-20 xl:left-1/3'>
        <Image className="w-48 relative top-24 left-56 z-40 lg:-rotate-90 lg:top-0" src="/images/triangulo_verde.png" width={150} height={150}/>
      </div>
      <div className="w-2/5 text-right relative -top-full -right-56 lg:-top-32 lg:w-full z-40 xl:-top-60">
        <h1 className="text-black text-3xl text-center mt-10 font-semibold xl:text-white">UBICACIÓN</h1>
        <p></p>
      </div>
    </div>
    <Image className="w-42 absolute bottom-10 esfera3 z-40 lg:top-0" src="/images/esfera gris.png" width={150} height={150}/> 
  </>
  )
}