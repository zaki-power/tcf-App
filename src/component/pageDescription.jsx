import qcm from "../assets/qcm.jpg"
import tcfE from "../assets/tcfEductation.png"
import ArrowDownIcon from "./svg/ArrowDownIcon"


function PageDescription() {
  return (
    <div>
      
      <div 
        className="w-full absolute flex justify-around items-center  inset-x-0 mt-20  bg-cover bg-center text-white "
        style={{ backgroundImage: `url(${qcm})` }}
      >
        <div className='flex flex-col justify-around items-center pb-10 pt-15 gap-5 w-3/4 md:w-150'>
          <img src={tcfE} className='w-20'/> 
          <p 
          className='text-center text-xs md:text-lg font-light'
          >
            Préparez le TCF (Test de connaissance du français) avec notre livre numérique exclusif qui réunit 3 ouvrages de référence en un seul volume pratique. Accessible à tout moment sur ordinateur, tablette ou téléphone, il vous permet de lire, réviser et progresser efficacement, où que vous soyez.
          </p>
          <div className='flex flex-row justify-center items-center gap-3 mb-10 lg:mb-20 mt-5'>
              <button className='bg-black px-4 py-2 rounded-xl'>S'entraîner</button>
              <button className='bg-black px-4 py-2 rounded-xl'>Tester en condition réélle </button>
          </div>
          <div className=" bg-black opacity-70 hover:opacity-75 h-15 absolute inset-x-0 bottom-0 flex flex-col justify-center items-center "> 
            <p
            className='text-center text-xs  p-0'
            >
              Voir le simulateur 
            </p>
            <p 
              className='text-center text-xs p-0'
            >
              Faites défiler la page vers le bas
            </p>
             <ArrowDownIcon className='w-5'/>
          </div> 
        </div>
     </div>
    </div>
  )
}

export default PageDescription

