import React, {useState} from 'react'

const Quiz_comp = () => {
    var Questionbank = [
        {
            Question:  "Who is the President of India?",
            Answers:[
                {Answer:"Dropadi Murmu", isCorrect:true},
                {Answer:"Narendra Modi", isCorrect:false},
                {Answer:"Jawaharlal Nehru", isCorrect:false},
                {Answer:"Mamta Banerjee", isCorrect:false}
            ]
        },
        {
            Question:  "Who is the Prime Minister of India?",
            Answers:[
                {Answer:"Jawaharlal Nehru", isCorrect:false},
                {Answer:"Narendra Modi", isCorrect:true},
                {Answer:"Dropadi Murmu", isCorrect:false},
                {Answer:"Mamta Banerjee", isCorrect:false}
            ]
        },
        {
            Question:  "What is the Capital of India?",
            Answers:[
                {Answer:"New Delhi", isCorrect:true},
                {Answer:"Delhi", isCorrect:false},
                {Answer:"Mumbai", isCorrect:false},
                {Answer:"Kolkata", isCorrect:false}
            ]
        },
        {
            Question:  "2*5+4?",
            Answers:[
                {Answer:"18", isCorrect:false},
                {Answer:"20", isCorrect:false},
                {Answer:"15", isCorrect:false},
                {Answer:"14", isCorrect:true}
            ]
        },
        {
            Question:  "HTML stands for ?",
            Answers:[
                {Answer:"Hyper Text Makeup Language", isCorrect:false},
                {Answer:"Hyper Text Markup Logo", isCorrect:false},
                {Answer:"Hyper Text Markup Language", isCorrect:true},
                {Answer:"Heavy Text Markup Language", isCorrect:false}
            ]
        }
    ]
    // console.log(Questionbank);
    
    const [currentques, setCurrentques] = useState(0);
    const [score, setScore] = useState(0);
    const [showscore, setShowscore] = useState(false);

    const handleAnswerOptionClick = (isCorrect)=>{
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentques + 1;
        if (nextQuestion < Questionbank.length) {
            setCurrentques(nextQuestion);
        } else {
            setShowscore(true);
        }
    };

  return (
    <>
        <div className='heading'>
            <h1>QUIZ APP</h1>
        </div>
        <div className='app'>
            {showscore ? (
                <div className='score-section'>You Scored {score} out of {Questionbank.length}</div>
            ) : (
                <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span >Question {currentques + 1} </span>/ {Questionbank.length}
                    </div>
                    <div className='question'>{Questionbank[currentques].Question}</div>
                </div>
                <div className='answer-section'>
                {Questionbank[currentques].Answers.map((answeroption)=>(
                    <button onClick={()=> handleAnswerOptionClick(answeroption.isCorrect)}>{answeroption.Answer}</button>
                ))}
                </div>
                </>
            )}
        </div>
    </>
  )
}
export default Quiz_comp
