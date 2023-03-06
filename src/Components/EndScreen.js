import React, {useContext} from 'react'
import { Button } from 'react-bootstrap'
import { QuizContext } from '../Help/Context'
import {QuestionsQuiz} from '../Help/Questions'

function EndScreen() {
  const {score, setScore, setGameState} = useContext(QuizContext)
  const restartQuiz = ()=>{
    setScore(0)
    setGameState("menu")
  }

  return (
    <div className='EndScreen'>
      <h1>
        Quiz Finished
      </h1>
      <h3>
        {score} / {QuestionsQuiz.length}
      </h3>
      <Button variant="danger" size="lg" onClick={restartQuiz}>
        Restart Quiz
      </Button>
    </div>
  )
}

export default EndScreen