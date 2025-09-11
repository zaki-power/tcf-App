import { Routes, Route } from "react-router-dom";
import PageDescription from "./component/pageDescription";
import Header from "./component/header";
import TestRéelle from "./component/testRéelle.jsx";
import QusetionWithOudio from "./component/QusetionWithAudio.jsx"; 
import QusetionPart from './component/question.jsx'
import Resolute from './component/resolute.jsx'

function App() {
  function Homepage(){
    return (
      <div>
        <Header/>
        <PageDescription />
        <TestRéelle/>
      </div> 
    )
  }


  return (
      <div className="px-10 font-inter overflow-hidden">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/question/:flag/:id" element={<QusetionWithOudio />} />
          <Route path ="/question/:flag/:id" element={<QusetionPart/>}/>
          <Route path ="/question/resolute" element={<Resolute/>} />
        </Routes>
      </div>
  );
}

export default App;