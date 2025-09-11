import react, {  useRef } from "react"; 
import ArrowRightIcon from "./svg/ArrowRightIcon";
import { useParams } from "react-router-dom";

function PlayAudio(props){
    const audioRef = useRef(null); 
    const [hasplayed, setHasPlayed] = react.useState(false);
    const handlePlay = () =>{
        if(audioRef.current){
            audioRef.current.play();
        }
        setHasPlayed(true);
    }
    const {id} = useParams();
    const numericPart = parseInt(id.slice(-2), 10);
    return(
        <div>
            <audio className=" hidden" ref={audioRef} src={props.src} />
            {
                ((numericPart === 1) &&!hasplayed) && 
                <div className=" fixed inset-0 z-50 flex justify-center items-center ">
                    <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-sm"></div >
                    <div className=" relative flex flex-col justify-around items-center w-1/2 lg:w-200 h-100 z-55 bg-white p-5 rounded-2xl text-center opacity-100 "> 
                        <p>Attention !</p>
                        <div>Vous êtes sur le point de lancer le simulateur TCF. Vous avez 90 minutes pour réaliser le test, vous ne pourrez pas faire de pause.</div>
                        <div>Utilisez des écouteurs ou un casque audio pour une meilleure expérience.</div>
                        <div>Êtes-vous prêt ?</div>
                        <button onClick={handlePlay} className=" flex justify-center items-center gap-2 border-1 px-5 py-2 rounded-2xl text-white bg-black hover:bg-gray-900 ">
                        <span>Commencer le test</span> 
                        <ArrowRightIcon className='w-5'/>                   
                        </button>
                    </div>
                </div>
            }
            

        </div>
    )

}
export default PlayAudio ;