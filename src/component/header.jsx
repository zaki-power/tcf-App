import React, { useState } from "react";
import logo from "../assets/logo2.png"
import tcf from "../assets/tcf.png"
function Header(){
   const [booksList ,setBooksList] = useState(false);
    return(
        <div className="fixed z-10 inset-x-0 bg-black text-xs md:text-xl">
            <div className="flex justify-between items-center px-10">
                <img 
                className="w-30 md:30" 
                src={logo} 
                />

                <button
                className="bg-white text-black font-bold px-2 py-1 rounded-xl" 
                onClick={()=>setBooksList(!booksList)}              
                >
                    les livres
                </button>
                {
                booksList && (
                    <ul className="flex flex-col md:flex-row  md:gap-10 justify-around items-center  bg-white text-black font-bold px-2 my-3 rounded-md  pointer-events-auto">
                        <li>
                            <button>Réussis le TCF</button>
                        </li>
                        <li>
                            <button> ABC TCF</button> 
                        </li>
                        <li>
                             <button>Réussir le TCF</button>
                        </li>
                    </ul>
                )
                }

               <img
                src={tcf} 
                className="w-15 hidden md:25 md:balock"
                />
            </div>
       </div>
    )
}
export default Header