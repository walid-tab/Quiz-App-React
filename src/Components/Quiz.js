import React, {useState, useContext} from 'react'
import { Button } from 'react-bootstrap'
import { QuestionsQuiz } from '../Help/Questions'
import { QuizContext } from '../Help/Context'


function Quiz() {
  const [currQuest, setCurrQuest] = useState(0)
  const [optionChoise, setOptionChoice] = useState("")
  const {score, setScore, setGameState} = useContext(QuizContext)


  const nextQuestion =()=>{
    if(QuestionsQuiz[currQuest].answer == optionChoise){
      setScore(score + 1)
    }
    
    setCurrQuest(currQuest + 1)
  }
  const FinishQuiz = ()=>{
    if(QuestionsQuiz[currQuest].answer == optionChoise){
      setScore(score + 1)
    }
    setGameState("endScreen")
  }
  return (
    <div className='Quiz'>
      <div className='quest'>{QuestionsQuiz[currQuest].prompt}</div>
      <div className='Options'>
        <button onClick={()=>setOptionChoice("A")}>{QuestionsQuiz[currQuest].OptionA}</button>
        <button onClick={()=>setOptionChoice("B")}>{QuestionsQuiz[currQuest].OptionB}</button>
        <button onClick={()=>setOptionChoice("C")}>{QuestionsQuiz[currQuest].OptionC}</button>
        <button onClick={()=>setOptionChoice("D")}>{QuestionsQuiz[currQuest].OptionD}</button>
      </div>
      {currQuest == QuestionsQuiz.length - 1?(
        <Button variant="warning" onClick={FinishQuiz}>Finish Quiz</Button>
      ):(
        <Button variant="success" size="lg" onClick={nextQuestion}>
        Next Question
      </Button>
      )}
      
      
    </div>
  )
}

export default Quiz