'use client'
import React,{useRef, useEffect} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Home_1 from "./home_1";
import Home_2 from "./home_2";
import Home_3 from "./home_3";
import Title_1 from "./Title_1";
import Title_2 from "./Title_2";
import Gallery from "./gallery";
import Image from "next/image";
import Footer from "./footer";
import Location from "./location";



export default function ScrollSection() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const traslate = -window.innerWidth;
  
    gsap.registerPlugin(ScrollTrigger);

 
      useEffect(() => {
          
        const pin = gsap.fromTo(sectionRef.current,{
          translateX: 0
        }, {
          translateX: traslate * 11,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        });
      
        return () => {
          {/* Una función de retorno para matar la animación en el desmontaje del componente. */ }
        pin.kill();
        }
      }, [])
  

    return(
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            
            <div className="scroll-section">
              <section className=" w-full h-full flex flex-col lg:flex">
                <Home_1 />
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col">
                <Home_2 />
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col">
                <Home_3 />
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col">
                <Title_1 />
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col z-30 ">
                <div className=" text-center my-5">
                  <h2 className="styleTitle2 w-full h-10 text-white py-1 text-3xl font-semibold">SERVICIOS</h2>
                </div>
                <Gallery  
                  imagen="img-gallery1.jpg"
                  titulo="Sistema de Alquiler de Llave de Mano"
                  servicios={["Equipos de bombeo","Generador Eléctrico","Procesos en general (deshidratadores, calentadores, etc)"]}
                  parrafo= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut iure beatae pariatur doloremque aspernatur, magnam expedita ad, ex, aperiam labore dolorem harum! Mollitia reprehenderit quidem, maiores vel modi explicabo harum?"
                />
                <Image className="w-44 absolute -bottom-10 esfera1" src="/images/esfera verde.png" width={150} height={150}/>
                <Image className="w-20 absolute bottom-16  esfera2" src="/images/esfera gris.png" width={150} height={150}/>   
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col z-30">
                <div className=" text-center my-5">
                  <h2 className="styleTitle1 w-full h-10 text-white py-1 text-3xl font-semibold">SERVICIOS</h2>
                </div>
                <Gallery 
                    imagen="img-gallery1.jpg"
                    titulo="Servicios de Well Testing"
                    servicios={["Operaciones en tierra o costa afuera","Pruebas DST","Limpieza de pozos","Pruebas de producción de pozos","Facilidades tempranas de producción","Servicios de Limpieza con Coiled Tubing","Optimización de la producción desde las facilidades de superficie"]}
                  parrafo= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut iure beatae pariatur doloremque aspernatur, magnam expedita ad, ex, aperiam labore dolorem harum! Mollitia reprehenderit quidem, maiores vel modi explicabo harum?"
                />
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col z-30">
                <div className=" text-center my-5">
                  <h2 className="styleTitle2 w-full h-10 text-white py-1 text-3xl font-semibold">SERVICIOS</h2>
                </div>
                <Gallery
                    imagen="img-gallery1.jpg"
                    titulo="Metering"
                    servicios={["Mantenimiento de equipos de medición de flujo multifásico","Alquiler de equipos multifásico para pruebas de pozos"]}
                    parrafo= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut iure beatae pariatur doloremque aspernatur, magnam expedita ad, ex, aperiam labore dolorem harum! Mollitia reprehenderit quidem, maiores vel modi explicabo harum?"
                />
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col z-30">
                <div className=" text-center my-5">
                  <h2 className="styleTitle w-full h-10 text-white py-1 text-3xl font-semibold">SERVICIOS</h2>
                </div>
                <Gallery 
                    imagen="img-gallery1.jpg"
                    titulo="Mantenimiento Operacional"
                    servicios={["Suministro e instalación de equipos","Repuestos (válvulas, sellos, rodamientos, etc)","Mantenimiento de Power House, Variadores de Frecuencia","Soldadura, reacondicionamiento de estructuras y líneas de tuberías","Equipos de bombeo de crudo e inyección de agua","Plantas de tratamiento (Crudo - Agua - Gas)","Gestión de integridad de tuberías","Limpieza de líneas, tambores y tanques","Plantas de proceso de refinería","Mantenimiento de reactores, plantas de hidrogenación, catalizadores, torres de enfriamiento y fraccionamiento"]}
                  parrafo= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut iure beatae pariatur doloremque aspernatur, magnam expedita ad, ex, aperiam labore dolorem harum! Mollitia reprehenderit quidem, maiores vel modi explicabo harum?"
                />
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col">
                <Title_2  />
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col z-30 Location">
                <Location />
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col">
                
              </section>
            </div>
            <div className="scroll-section">
              <section className="w-full h-full flex flex-col">
                <Footer />
              </section>
            </div>
          </div>
        </div>
      </section>
    );
}