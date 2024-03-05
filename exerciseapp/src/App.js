import './App.css';
import {useCallback, useState} from 'react'
import DurartionExercise from './components/DurationExercise';
const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURATION_EXERCISE = "duration"
const REPETITION_EXERCISE = "repetition"


function RepetitionExercise ( {exercise, SetMenuScreen} ) {
  let [count, setCount] = useState(0)
  return <div>
    <p>{exercise.name}</p>
    <p style={{fontSize:"5em"}}>{count}</p>
    <button style={{fontSize:"2em"}}
      onClick={()=> setCount(count=>count+1)}>Increment</button>
    <button style={{fontSize:"2em"}}
      onClick={()=> setCount(0)}>Reset</button><br/>
      <button style={{fontSize:"1em"}} onClick={SetMenuScreen}>Return to Menu</button>
    </div>
}

let exerciseList = [
  {type: DURATION_EXERCISE, name: "Plank"},
  {type: DURATION_EXERCISE, name: "Running"},
  {type: REPETITION_EXERCISE, name: "Push-Ups"}
]

function App() {
  let [currentScreen, setCurrentScreen] = useState(EXERCISE_SCREEN)
  let [currentExercise, setCurrentExercise] = useState(exerciseList[2])
  let screenComponent = undefined
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise)
    setCurrentScreen(EXERCISE_SCREEN)
  })

  if(currentScreen === MENU_SCREEN) {
    screenComponent = <div>
      <p>Exercise Menu</p>
      <ul>
        {exerciseList.map((exercise)=> {
        return <li key={exercise.name}>
          <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
        </li>  
        })}
      </ul>
    </div>
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch(currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = <DurartionExercise
          exercise={currentExercise} 
          SetMenuScreen={()=> setCurrentScreen(MENU_SCREEN)} 
          />
      break;
      case REPETITION_EXERCISE:
        screenComponent = <RepetitionExercise
          exercise={currentExercise} 
          SetMenuScreen={()=> setCurrentScreen(MENU_SCREEN)} 
          />
      break;
      default:
      screenComponent = undefined

    }

  } 

  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;
