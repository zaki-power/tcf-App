import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { correct, correctCO ,correctCE,correctST} from '../math/correct';
import { Link, useLocation } from 'react-router-dom';

const Score = (props)=>{
    return(
        <div className='flex flex-col justify-center  items-center border-2  border-gray-300 w-80 md:w-100 p-5 rounded-2xl shadow-xl '>
            <div className='flex justify-center items-center  gap-10 '>
                <p className='font-bold text-xl md:text-2xl text-black'>{props.type}</p>
                <div>B2</div>
            </div>
            <div className='flex text-gray-500 '> 
                <span className='text-black'>{props.correct}/{props.totalQ}</span>
                réponses incorrectes
            </div>
            <div className='w-40 '>
                <CircularProgressbar maxValue={props.totalQ} minValue={0} value={props.correct} text={`${(props.correct*80)/100}%`} />
            </div>
        </div>
    )
}


function Resolute (){
    const location = useLocation();
    const qInsered = location.state?.qInsered || [];
    const testType = location.state?.testType || '';
    return (
        <div className='flex flex-col gap-30'>
            <div className='flex flex-col justify-center items-center gap-20 '>
                <div className=''></div>
                <div className=' flex flex-col gap-10 '>
                    <div className='flex flex-col justify-center items-center pt-20'>{testType}</div>
                    <Score  type='Vos résultats de test' correct={correct(qInsered)} totalQ={80}/>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                    <Score type='compréhension orale' correct={correctCO(qInsered)} totalQ={30}/>
                    <Score type='Structure de la langue' correct={correctST(qInsered)} totalQ={20}/>
                    <Score type='Compréhension écrite' correct={correctCE(qInsered)} totalQ={30}/>
                </div>
            </div>

            <div className='flex flex-col gap-10'>
                <p className='text-xl md:text-2xl font-bold '>Récapitulatif des erreurs</p>
                <div className='grid grid-cols-15 gap-3 '>
                    {    
                        qInsered
                        .map((answer,index)=>{
                            
                            return (
                                !answer.isCorrect &&
                                <Link 
                                    to={`/question/true/${answer.questionId}`} 
                                    state={{answers: qInsered}}
                                    className='flex justify-center items-center border-2 rounded-xl px-5 py-4 text-black'
                                    style={{
                                        background: answer.isCorrect ?'rgba(100,255,100,0.4)':'rgba(255,100,100,0.4)',
                                        backdropFilter: 'blur(10px)', 
                                        WebkitBackdropFilter: 'blur(10px)',  
                                        borderColor : answer.isCorrect ? 'green' : 'red',
                                        opacity : 'inherit',
                                    }}
                                    key={index+answer.questionId}
                                >
                                    <span>{index+1}</span>
                                </Link>
                            )
                        })

                    }
                </div>
            </div>
            <div className='flex flex-col gap-10  '>
                <p className='text-xl md:text-2xl font-bold '>Récapitulatif du test</p>
                <div className='grid grid-cols-15 gap-3 '>
                    {
                        qInsered.map((answer,index)=>{
                            return (
                                <Link 
                                    to={`/question/true/${answer.questionId}`} 
                                    state={{answers: qInsered}}
                                    className='flex justify-center items-center border-2 rounded-xl px-5 py-4 text-black'
                                    style={{
                                        background: answer.isCorrect ?'rgba(100,255,100,0.4)':'rgba(255,100,100,0.4)',
                                        backdropFilter: 'blur(10px)', 
                                        WebkitBackdropFilter: 'blur(10px)',  
                                        borderColor : answer.isCorrect ? 'green' : 'red',
                                        opacity : 'inherit',
                                    }}
                                    key={index+answer.questionId}
                                >
                                    <span>{index+1}</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Resolute;