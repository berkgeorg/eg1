import React from "react";
import Image from "next/image";

export default function Footer() {
    return(
      <div className=" w-screen h-screen flex">
        <div className="w-screen h-screen bg-neutral-200 flex flex-col ">
          <div className=" w-full h-1/4 mt-20 lg:w-2/3">
            <Image className="w-screen lg:w-2/3" src="/images/logo1.png" width={150} height={150} alt="logo Wellgix"/>
          </div>
          <div className=" w-full h-1/4 flex p-10">
            <a href=""><Image className=" mx-5 w-16 h-16  " src="/images/part - ig.png" width={100} height={100} alt="ig" /></a>
            <a href=""><Image className=" mx-5 w-14 h-14  " src="/images/part - face.png" width={100} height={100} alt="face" /></a>
            <a href=""><Image className=" mx-5 w-16 h-16  " src="/images/part - whatsapp.png" width={100} height={100} alt="whatsapp" /></a>
          </div>
          <div className=" w-full h-1/4 flex flex-col">
            <h1 className="w-72 h-10 text-black text-center pt-2 text-4xl font-bold mb-10 mx-12 ">Comunícate con nosotros</h1>
            <p className="w-72 h-10 text-black text-center pt-2 text-xl mx-12 ">¿A cuál de nuestras áreas quieres pertenecer?</p>
          </div>
          <div className="w-full h-1/4">
            <h1 className="w-72 h-10 text-black text-center pt-2 text-2xl">INVERSOR</h1>
            <div className="flex p-5">
              <a href=""><Image className="mx-5 " src="/images/part - boton inversor.png" width={100} height={100} alt="ig" /></a>
              <a href=""><Image className="mx-5 " src="/images/part - boton trabajador.png" width={100} height={100} alt="face" /></a>
              <a href=""><Image className="mx-5 " src="/images/part - boton aliado socio.png" width={100} height={100} alt="whatsapp" /></a>
            </div>
          </div>                 
        </div>
      </div>
    )
}