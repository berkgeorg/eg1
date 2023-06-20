import React from "react";
import Image from "next/image";

export default function Gallery({
  imagen,
  titulo,
  servicios,
  parrafo,
  className
}) {
  return(
    <>
      <div className="mt-5 lg:flex">
        <div className=" w-4/5 img_gallery overflow-hidden mt-10 mb-10 mx-10 lg:w-1/2 lg:h-screen lg:relative ">
          <Image className="w-full h-full rounded-t-lg "
                src={`/images/${imagen}`}
                width={150}
                height={150}
                alt="Foto "/>
          <div className="w-full h-auto backdrop-contrast-50 bg-black/70 text-left rounded-tr-lg relative -top-7 hover:-translate-y-3/4 transition ease-in-out duration-300 ">
            <p className=" text-lg text-white">{parrafo}</p><br></br>   
          </div>
        </div> 
        <div>
          <div className=" w-auto h-10 my-10 mx-6 text-center lg:relative lg:w-1/2 ">
            <p className=" text-2xl font-semibold text-black">{titulo}</p>   
          </div>
          <div className="w-4/5 img_gallery flex flex-col px-5 text-left relative left-10 overflow-auto lg:top-5 lg:w-4/5 lg:h-1/2 lg:overflow-visible">
            {servicios.map((item, index) =>(
              <a className="text-lg text-black mt-3 font-medium flex lg:w-full " href="#" key={index}> <Image className=" w-3 h-3 rotate-90 relative top-2 mr-1" src="/images/icons-vertical.png" width={5} height={5} />{item}</a>
            ))}
          </div>
        </div>  
        
      </div>
    </>
  );
}