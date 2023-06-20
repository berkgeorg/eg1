import React from "react";
import Image from "next/image";

export default function Location() {
  return(
  <>
    <div className=" w-screen h-screen">
      <div className=" w-full px-10">
        <h2 className="text-black text-3xl text-center mt-10 font-semibold lg:text-4xl"> Base de Operaciones: Ciudad Comercial Petroriente</h2>
        <p className="text-black text-lg text-left mt-5 lg:text-2xl lg:w-4/5 lg:relative lg:left-40 xl:w-2/3 xl:left-60 xl:mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima unde quibusdam minus non sapiente adipisci provident officia excepturi sequi fuga culpa, quasi numquam eligendi, dolor blanditiis vitae dolore ipsum.</p>
      </div>
      <div className=" w-full h-2/4 pl-8 pt-10">
        <iframe className=" w-4/5 h-full lg:relative lg:left-20 xl:left-32 xl:mt-16" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.3829641589!2d-63.222026824951165!3d9.80023162042841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c333f89fae2c6cf%3A0x4da8b399047761d8!2sCiudad%20Comercial%20Petroriente!5e0!3m2!1ses!2sve!4v1686968780102!5m2!1ses!2sve allowfullscreen=" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
      </div>
    </div>
  </>
  )
}