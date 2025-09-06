import React, { useState } from "react";

function TestRéelle() {
    const [examList ,setExamList] = useState(false);

    return (
        <div className="flex flex-col justify-around items-center gap-5 pt-200 ">
            
            <p className="text-2xl md:text-3xl font-bold ">
                Test en conditions réelles
            </p>
            <div className="w-3/4 md:w-1/2 text-xs md:text-lg font-light text-justify flex flex-col gap-8 ">
                <p className="text-black ">Prêt à relever le défi ? Passez un test en conditions réelles du TCF, évaluez vos résultats et entraînez-vous sans limite. Recommencez autant de fois que vous le souhaitez… c’est 100 % gratuit !</p>
                <p className=" text-gray-500">Pour vous préparer efficacement au TCF, nous vous proposons un test de 90 minutes, conçu à partir du livre Réussir le TCF, et reproduisant fidèlement les conditions d’une session officielle. Les résultats obtenus n’ont pas valeur de certification, mais ils constituent un entraînement idéal pour maximiser vos chances de réussite le jour de l’examen</p>
            </div>
            <div className="flex flex-col gap-5 py-10  text-xl">
                 <button className=" bg-black px-4 py-2 rounded-2xl text-white" >test aléatoire</button>
                 <button
                   className=" bg-black px-4 py-2 rounded-2xl text-white"
                    onClick={()=>setExamList(!examList)}
                 >Choisir le test
                 </button>
                 {
                    examList && (
                        <ul className="flex flex-col gap-3 justify-around items-center  bg-white text-black font-bold px-2 my-3 rounded-md  pointer-events-auto">
                            <li></li>
                        </ul>
                    )
                 }
            </div>
       </div>
    )
}
export default TestRéelle