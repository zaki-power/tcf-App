import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Structure from "./questionTyps/Structure";
import CompE from "./questionTyps/Compréhension";
import CompO from "./questionTyps/CompréhensionOrale";
import RLTcf from "../data/qcm1";


function QuestionPart() {
    
    const oralexam = RLTcf[0];
    const StructureL = RLTcf[1];
    const writtenexam = RLTcf[2];

    const navigate = useNavigate();
    const location = useLocation();
    const {id } = useParams();
    const qNumber = parseInt(id.slice(-2), 10) - 1;
    const combinedRLTcf = [...oralexam, ...StructureL, ...writtenexam];
    const qInseredDefault = combinedRLTcf.map(item => ({ questionId: item.id, isCorrect: false, answerid: null, questionType: item.questionType }));
    const [qInsered, setQInsered] = React.useState(() => location.state?.answers || qInseredDefault);

    React.useEffect(() => {
        if (
            qNumber >= oralexam.length + StructureL.length + writtenexam.length
        ) {
            navigate("/question/resolute", {
                state: { qInsered: qInsered, testType: 'Simulation du TCF' }
            });
        }
    }, [qNumber, oralexam.length, StructureL.length, writtenexam.length, navigate, qInsered]);

    if (qNumber < oralexam.length) {
        return (
            <CompO
                test={oralexam[qNumber]}
                setQInsered={setQInsered}
                qInsered={qInsered}
            />
        );
    } else if (qNumber - oralexam.length < StructureL.length) {
        const StructureIndex = qNumber - oralexam.length;
        return (
            <Structure
                test={StructureL[StructureIndex]}
                setQInsered={setQInsered}
                qInsered={qInsered}
            />
        );
    } else if (qNumber - oralexam.length - StructureL.length < writtenexam.length) {
        const writtenexamIndex = qNumber - oralexam.length - StructureL.length;
        return (
            <CompE
                test={writtenexam[writtenexamIndex]}
                setQInsered={setQInsered}
                qInsered={qInsered}
            />
        );
    } else {
      
        return null;
    }

}
export default QuestionPart;