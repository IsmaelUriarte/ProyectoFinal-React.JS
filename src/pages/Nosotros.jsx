

const Nosotros = () => {
  return (
    <div className="">
        <div className=" bg-[url('../public/bmw-serie-1.webp')] bg-auto bg-right text-6xl w-6/12 rounded-r-[35px]">
          <div className=" text-center bg-cyan-950 opacity-80 pb-28 pt-28 mt-16 mb-14 rounded-r-[35px] shadow-xl shadow-cyan-950/50">
            <h1 className=" text-white font-semibold border-t-4 mx-16 ">About Us</h1>
          </div>
        </div>

        <div className="description-nosotros">
          <p className="text-center text-gray-700 font-medium text-2xl mx-20">
            Bienvenidos a NABMW, esta Empresa está enfocada a la venta de carros completamente 0KM de la Marca BMW.
          </p>
          
          {/* <------> */}

          <div className="mb-16 mt-10 text-center">
              <h4 className="text-gray-700 mx-12 text-xl">
                Somos una Empresa ubicada en el mercado de hogares modernos de hace más de 43 Años, Fundada por José Hernando Molina en el Año 1980, nuestra principal herramienta es brindarte las mejores opciones para que puedas tener el Hogar de tus sueños, de forma correcta y sin ninguna clase de inconveniente en el proceso. Tenemos las mejores personas trabajando en cada una de nuestras obras para así tener tu hogar lo más antes posible y de forma inmediata.
              </h4>
          </div>


            <h1 className=" text-center font-medium text-4xl mb-14 mt-20">
              Conocé Nuestros Servicios!!
            </h1>
          <div className="service flex ">
            
            <div>
              <h3 className="ml-10 mr-10 text-gray-700">
                Conocé mas acerca de nuestros servicios, comunicate con nosotros y sabes más.
              </h3>
            </div>
            
            <div className=" justify-between shadow-xl mb-16">
              <img src="../public/BMW-Service_1.webp" alt="" className="h-[25rem]" />
            </div>
            
          </div>

          <div className="service flex ">
            <div className=" justify-between shadow-xl">
              <img src="../public/BMW-Service_1.webp" alt="" className="h-[25rem]" />
            </div>
            
            <div>
              <h3 className="ml-10 mr-10 text-gray-700">
                Conocé mas acerca de nuestros servicios, comunicate con nosotros y sabes más.
              </h3>
            </div>
            
          </div>

          {/* <------> */}

          <div className="">
            <h2>
              Conocé a nuestro equipo 
            </h2>

          </div>

        </div>
    </div>
  )
}

export default Nosotros