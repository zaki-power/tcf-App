import ArrowRightIcon from "../svg/ArrowRightIcon";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {handleAnswer,handleNext} from './handel.js'

function CompE(props) {
    const navigate = useNavigate();
    const {flag,id} = useParams();
    
    const answerId = props.qInsered.find(item => item.questionId === id)?.answerid ?? null;
    const [selected,setSelected] = React.useState(null);
    const correction = flag === 'true';


    return (
        <div className="flex flex-col items-center justify-between h-full p-4 gap-30">
            <div className="flex justify-between items-center w-full">
                <div></div>
                <div></div>
            </div>

            <div className="flex flex-col gap-10 w-full justify-center items-center">
                <div className="flex flex-col items-center justify-center text-center gap-10 ">
                    <p className="text-gray-600 text-2xl"> Compréhension écrite</p>
                    <p className="text-gray-700">Lisez les documents. Pour chaque question, choisissez la bonne réponse et cliquez sur le bouton correspondant.</p>
                </div>

                 <div className="flex flex-col gap-10 w-full justify-center items-center  lg:w-3/4 lg:flex-row lg:justify-around lg:items-center">
                    {
                        props.test.text ?
                        <div className="flex justify-center items-center w-full md:w-3/4  py-8 px-8 rounded-2xl border-2 border-gray-800">
                            <p className="text-black text-md    "> <div dangerouslySetInnerHTML={{ __html: props.test.text }} /></p>
                        </div> 
                        : 
                        <div className="flex justify-center items-center w-full ">
                            <img src={props.test.image} alt="question illustration" className=" max-h-100 object-contain rounded-2xl"/>
                        </div> 

                    }
                    <div className="flex flex-col gap-5 w-full justify-center items-center md:w-3/4">
                        <p className="font-bold text-black md:text-2xl text-xl text-center">Cliquez sur votre réponse</p>
                        { 
                            !answerId && correction && <p className="text-[rgba(255,0,0)]">Vous n'avez pas répondu à cette question.</p>
                        }
                        <ul className="grid grid-cols-1 gap-4 justify-center items-center ">
                            {
                                props.test.reponses.map((rep)=>(
                                    <li key={props.test.id + rep.id} >
                                        <button
                                        className="flex text-left items-center text-black text-xl min-w-80 gap-8 px-5 py-3 border-2 border-gray-300 rounded-3xl hover:bg-gray-100 focus:outline-none"
                                        style={{
                                        backgroundColor:
                                        !correction && rep.id === selected
                                            ? 'gray'
                                            : correction && rep.id === answerId && !rep.isCorrect
                                            ? 'rgba(255,100,100,0.4)'
                                            : correction && rep.isCorrect
                                            ? 'rgba(100,255,100,0.4)'
                                            : '',
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                        }}
                                        onClick={()=>{
                                            if (!correction) {
                                            handleAnswer(props.test.id,rep.isCorrect,rep.id,props.test.questionType,setSelected,props.setQInsered,selected);
                                            }
                                        }}
                                        >
                                            <div >{rep.id.toUpperCase()}</div>
                                            <p className="" >{rep.text}</p>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
            <div className="flex justify-between items-center w-full md:w-3/4">
               <button
                 className= "border-1 px-5 py-2 rounded-2xl hover:bg-gray-300"
                 onClick={()=>{
                        navigate("/question/resolute" ,{
                         state:{ qInsered:props.qInsered,testType : 'Simulation du TCF'}
                       })
                 }}
                >
                    Arrêter le test
                </button>
                <button 
                  className="flex justify-center items-center gap-2 border-1 px-5 py-2 rounded-2xl text-white bg-black hover:bg-gray-900 "
                  onClick={()=>{
                    handleNext(setSelected,selected,props.setQInsered,props.test,navigate,correction)
                  }}
                > 
                {
                    correction ? 'Question suivante':'Revenir aux résultats'
                    
                }
                <span>
                   <ArrowRightIcon className='w-5'/> 
                </span>    
                </button>
            </div>
        </div>

    )
}

export default CompE;

