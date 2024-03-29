
const FooterComponent = () => {
  return (
    <div className=" w-full mt-10">
        <div className="container max-w-7xl mx-auto bg-white px-5 pt-5 text-gray-700 shadow-xl shadow-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            <div className="mb-5">
              <h4 className="text-2xl pb-2 mb-4 w-4/6 border-b-2 border-gray-700">Company</h4>
              <p className="text-gray-500">
                B618 Lost Street
              </p>
              <p className="text-gray-500 pt-2.5">
                Chandigarh, PV 25657423
              </p>
              <p className="text-gray-500 pt-2.5">
                USA
              </p>
              <p className="text-gray-500 pt-2.5">
                <strong>Phone:</strong>+54 3425 683 898 <br />
                <strong>Email:</strong>info@example.com
              </p>
              
            </div>

            <div className="mb-5">
              <h4 className="text-2xl pb-2 mb-4 w-4/6 border-b-2  border-gray-800">UseFul Links</h4>
              <ul className="text-gray-500">
                <li className=" border-b-2 border-gray-300 w-1/4 cursor-pointer transform transition-all ease-in hover:scale-110 hover:text-gray-700 hover:border-gray-400 pl-2 mb-3">Link 1</li>
                <li className=" border-b-2 border-gray-300 w-1/4 cursor-pointer transform transition-all ease-in hover:scale-110 hover:text-gray-700 hover:border-gray-400 pl-2 mb-3">Link 2</li>
                <li className=" border-b-2 border-gray-300 w-1/4 cursor-pointer transform transition-all ease-in hover:scale-110 hover:text-gray-700 hover:border-gray-400 pl-2 mb-3">Link 3</li>
                <li className=" border-b-2 border-gray-300 w-1/4 cursor-pointer transform transition-all ease-in hover:scale-110 hover:text-gray-700 hover:border-gray-400 pl-2 mb-3">Link 4</li>
              </ul>
            </div>

            <div className="mb-5">
            <h4 className="text-2xl pb-2 mb-4 w-4/6 border-b-2 border-gray-700">Your Subscription</h4>
              <p>Join 25.000+ others</p>
              <form className="pt-2.5">
                <input className="bg-gray-400 w-full py-2.5 rounded-2xl" type="text" name="" id="" />
                <button className=" border-2 ml-4 mt-3 px-1 py-1 border-cyan-950 rounded-xl transition-all ease-in hover:scale-105 transform  hover:bg-cyan-950 hover:text-white hover:shadow-xl">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="copy pb-3 text-center bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300">
            <p className="parrafo-foter pt-5">Terms and Conditions, Confidentiality and Privacy Rules</p>
            <small>&copy;2017 <b>NABMW</b> - All rights reserved</small>
        </div>
    </div>
    
  )
}

export default FooterComponent