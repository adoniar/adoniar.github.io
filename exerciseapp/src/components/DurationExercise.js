import StopWatch from './StopWatch'

export default function DurartionExercise ({exercise, SetMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <StopWatch/>
      <button onClick={SetMenuScreen}>Back to Menu</button>
    </div>
  }