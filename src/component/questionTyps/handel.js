const handleAnswer = (questionId, isCorrect, answerid, questionType, setSelected, setQInsered, selected) => {
    setSelected(prev => (answerid === prev ? null : answerid));
    setQInsered(prev => {
        if (selected === answerid) {
                return prev.map(item =>
                item.questionId === questionId
                    ? { ...item, isCorrect: false, answerid: null }
                    : item
            );
        }
        return prev.map(item =>
            item.questionId === questionId
                ? { ...item, isCorrect, answerid, questionType }
                : item
        );
    });
};

const handleNext = (setSelected, selected, setQInsered, test, navigate,correction) => {

    const currentId = test.id;
    const numericPart = parseInt(currentId.slice(-2), 10);
    const nextNumericPart = String(numericPart + 1).padStart(2, '0');
    const prefix = currentId.slice(0, -2);
    const nextId = `${prefix}${nextNumericPart}`;
    if (correction) {
        navigate(`/question/true/${nextId}`),{
            state : {answers:answers }
        };
    }else {
        if (!selected) {
            setQInsered(prev =>
                prev.map(item =>
                    item.questionId === test.id
                        ? { ...item, isCorrect: false, answerid: null, questionType: test.questionType }
                        : item
                )
            );
        }
        navigate(`/question/false/${nextId}`);
    }
    setSelected(null);
};

export { handleAnswer, handleNext };