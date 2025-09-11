 
function correct (props) {
   const result = props
   return result.filter(item => item.isCorrect === true).length;
}


function correctCO (props) {
   const result = props
   return result.filter(item => item.isCorrect === true && item.questionType ==='COMPRÉHENSION ORALE').length; 
}

function correctCE (props) {
   const result = props
   return result.filter(item => item.isCorrect === true && item.questionType ==='COMPRÉHENSION ÉCRITE').length; 
}

function correctST (props) {
   const result = props
   return result.filter(item => item.isCorrect === true && item.questionType ==='DES STRUCTURES').length; 
}

export {correct,correctCO,correctCE,correctST}; 