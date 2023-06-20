import React from "react";
import Image from "next/image";

export default function Home_3() {
  return(
    <>
      <div className="flex flex-col w-screen h-screen ">
        <div className="w-full h-full bg-gray-700 flex flex-col z-10">
          <h1 className=" text-white text-3xl text-center mt-10">NOS IDENTIFICA</h1>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Profesionales altamentes capacitados</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Respuesta Inmediata</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Reducción de Tiempos Perdidos</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Medición Certificada</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Sostenimiento, Optimización e Incremento de la Producción</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Extensión de la Vida útil de pozos y equipos</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Reducción de producción Diferida</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Desarrollo y ampliación de nuevas tecnologías</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Alianzas Tecnológicas estratégicas</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Soluciones integrales</a></div>
          <div className="w-full px-8 mt-8 flex sm:p-6 lg:pt-0 lg:pb-0"><span className="w-8  "> <Image className=" w-8 h-8 sm:w-8 sm:h-8 lg:h-6" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-lg hover:text-xl text-white sm:text-3xl sm:hover:text-4xl lg:text-lg lg:hover:text-xl" href="">Múltiples fuentes de trabajos simultáneos</a></div>
        </div>
        <Image className="w-16 absolute h3-esfera2 z-20 lg:w-40 " src="/images/esfera verde.png" width={150} height={150}/>
        <Image className="w-20 absolute h3-esfera1 z-20 " src="/images/esfera gris.png" width={150} height={150}/>
      </div>
    </>
  )
}