import AudioExam1 from "../assets/audio/tcf-exam-1.mp3"
import PlayAudio from "./PlayAudio";
import QuestionPart from "./question";

function QusetionWithOudio(){
    return (
      <div>
        <PlayAudio src={AudioExam1}  />
        <QuestionPart />
      </div>
    )
  }
 
export default QusetionWithOudio ;