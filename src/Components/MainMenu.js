import React, {useContext} from 'react'
import { QuizContext } from '../Help/Context'
import { Button } from 'react-bootstrap'

export default function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext)
  return (
    <div className='Menu'>
      <h2>Welcome to Quiz App</h2>
      <div className='startBtn'>
        <Button variant="secondary" 
        onClick={()=>{
            setGameState("quiz")
            }}>
                Start
        </Button>
        </div>
    </div>
  )
}
